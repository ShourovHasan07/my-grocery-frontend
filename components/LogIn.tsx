"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface OtpResponse {
  success: boolean;
  token?: string;
  message?: string;
}

const LoginPage: React.FC = () => {
  const [identifier, setIdentifier] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [step, setStep] = useState<number>(1); // 1: send OTP, 2: verify OTP
  const router = useRouter();

  // OTP
  const sendOtp = async () => {
  if (!identifier) {
    alert("Please enter your email or phone");
    return;
  }

  try {
    const res = await fetch("http://localhost:4000/auth/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier }), // শুধু identifier পাঠাচ্ছি
    });

    console.log("Send OTP response status:", res.status);

    const data: OtpResponse = await res.json();

    if (data.success) setStep(2);
    else alert(data.message || "Failed to send OTP");
  } catch (error) {
    console.error("Send OTP Error:", error);
    alert("Error sending OTP");
  }
};

  // OTP 
const verifyOtp = async () => {
  if (!otp) {
    alert("Please enter OTP");
    return;
  }

  try {
    const res = await fetch("http://localhost:4000/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier, otp }),
    });

    const data = await res.json();
    console.log("Verify OTP response:", data); // Debug

    if (!data.success || !data.token) {
      alert(data.message || "OTP verification failed");
      return;
    }

    localStorage.setItem("token", data.token);

    const guestId = localStorage.getItem("guestId");
    if (guestId) {
      const mergeRes = await fetch("http://localhost:4000/cart/merge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify({ guestId }),
      });

      const mergeData = await mergeRes.json();
      console.log("Merge response:", mergeData);

      if (!mergeRes.ok) {
        alert(mergeData.message || "Merge failed");
        return;
      }

      localStorage.removeItem("guestId");
    }

    router.push("/check-out");
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
};




  return (
    <div>
      {step === 1 ? (
        <main className="main pages">
          <div className="page-content pt-150 pb-150">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                  <div className="row">
                    <div className="col-lg-6 pr-30 d-none d-lg-block">
                      <img
                        className="border-radius-15"
                        src="assets/imgs/page/login-1.png"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-6 col-md-8">
                      <div className="login_wrap widget-taber-content background-white">
                        <div className="padding_eight_all bg-white">
                          <div className="heading_s1">
                            <h1 className="mb-5">Login</h1>
                            <p className="mb-30">
                              Don't have an account?{" "}
                              <a href="page-register.html">Create here</a>
                            </p>
                          </div>
                          <form>
                            <div className="form-group">
                              <input
                                type="text"
                                placeholder="Email or Phone"
                                value={identifier}
                                onChange={(e) => setIdentifier(e.target.value)}
                                required
                              />
                            </div>

                            {/* <div className="form-group">
                              <input
                                type="password"
                                name="password"
                                placeholder="Your password *"
                                required
                              />
                            </div> */}




                            <div className="login_footer form-group mb-50">
                              <div className="chek-form">
                                <div className="custome-checkbox">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="checkbox"
                                    id="exampleCheckbox1"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="exampleCheckbox1"
                                  >
                                    <span>Remember me</span>
                                  </label>
                                </div>
                              </div>
                              <a className="text-muted" href="#">
                                Forgot password?
                              </a>
                            </div>

                            <div className="form-group">
                              <button
                                type="button"
                                onClick={sendOtp}
                                className="btn btn-heading btn-block hover-up"
                              >
                                Log in/Send OTP
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}
    </div>
  );
};

export default LoginPage;

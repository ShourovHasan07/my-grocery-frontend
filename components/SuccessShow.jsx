
"use client"



// checkout-success page
import { useEffect } from "react";
import { useRouter } from "next/navigation";




const CheckoutSuccess = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/"); // home page
    }, 3000);//3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Payment Successful 🎉</h1>
      <p>Redirecting to home page...</p>
    </div>
  );
};

export default CheckoutSuccess;

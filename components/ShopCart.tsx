"use client";

import React, { useEffect, useState } from "react";
import { getGuestId } from "@/lib/guest";
import {
  getCartApi,
  updateCartApi,
  removeItemApi,
  clearCartApi,
} from "@/lib/cartApi";


import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; // যেই context থেকে user info আছে





const ShopCart = () => {


     const router = useRouter();
const { user, token } = useAuth();/ user logged in হলে token থাকবে





  const [cart, setCart] = useState<any>({
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
});

  const [selected, setSelected] = useState<number[]>([]);
  const guestId = getGuestId();

  const loadCart = async () => {
  if (!guestId) return;

  const data = await getCartApi(guestId);

  setCart({
    items: data?.items || [],
    totalQuantity: data?.totalQuantity || 0,
    totalPrice: data?.totalPrice || 0,
  });
};


  useEffect(() => {
    loadCart();
  }, []);

  // select single
  const toggleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  //  select all
  const selectAll = () => {
    if (selected.length === cart.items.length) {
      setSelected([]);
    } else {
      setSelected(cart.items.map((i: any) => i.productId));
    }
  };

  //  quantity update
  const updateQty = async (id: number, qty: number) => {
    if (qty < 1) return;
    await updateCartApi(id, qty, guestId!);
    loadCart();
  };

  //  delete single product
  const removeItem = async (id: number) => {
    await removeItemApi(id, guestId!);
    loadCart();
  };

  //  clear cart
  const clearCart = async () => {
    await clearCartApi(guestId!);
    setCart(null);
    setSelected([]);
  };



  const handleCheckout = async () => {
  if (!user) {
    router.push("/login");
    return;
  }

  // guestId get from localStorage
  const guestId = localStorage.getItem("guestId");
  
  // 1. merge guest cart if exists
  if (guestId) {
    await fetch("/api/cart/merge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ guestId }),
    });
    localStorage.removeItem("guestId"); // cleanup
  }

  // 2. proceed to checkout
  await fetch("/api/orders/checkout", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });

  router.push("/checkout/payment"); // payment page
};







  if (!cart) return <p style={{ padding: 40 }}>Loading...</p>;

  return (
    <main className="main">
      <div className="container mb-80 mt-50">
        <div className="row">
          <div className="col-lg-8 mb-40">
            <h1 className="heading-2 mb-10">Your Cart</h1>
            <div className="d-flex justify-content-between">
              <h6 className="text-body">
                There are{" "}
                <span className="text-brand">{cart.totalQuantity}</span>{" "}
                products in your cart
              </h6>
              <h6 className="text-body">
                <a
                  className="text-muted"
                  style={{ cursor: "pointer" }}
                  onClick={clearCart}
                >
                  <i className="fi-rs-trash mr-5" />
                  Clear Cart
                </a>
              </h6>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="table-responsive shopping-summery">
              <table className="table table-wishlist">
                <thead>
                  <tr className="main-heading">
                    <th className="custome-checkbox start pl-30">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={
  cart.items.length > 0 &&
  selected.length === cart.items.length
}
                        onChange={selectAll}
                      />
                    </th>
                    <th colSpan={2}>Product</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th className="end">Remove</th>
                  </tr>
                </thead>

                <tbody>
                  {cart.items?.map((item: any) => (
                    <tr className="pt-30" key={item.productId}>
                      <td className="custome-checkbox pl-30">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={selected.includes(item.productId)}
                          onChange={() => toggleSelect(item.productId)}
                        />
                      </td>

                      <td className="image product-thumbnail pt-40">
                        <img src={item.image} alt={item.name} />
                      </td>

                      <td className="product-des product-name">
                        <h6 className="mb-5">
                          <a className="product-name mb-10 text-heading">
                            {item.name}
                          </a>
                        </h6>
                      </td>

                      <td className="price">
                        <h4 className="text-body">${item.price}</h4>
                      </td>

                      <td className="text-center detail-info">
                        <div className="detail-qty border radius">
                          <a
                            className="qty-down"
                            onClick={() =>
                              updateQty(item.productId, item.quantity - 1)
                            }
                          >
                            <i className="fi-rs-angle-small-down" />
                          </a>
                          <input
                            type="text"
                            className="qty-val"
                            value={item.quantity}
                            readOnly
                          />
                          <a
                            className="qty-up"
                            onClick={() =>
                              updateQty(item.productId, item.quantity + 1)
                            }
                          >
                            <i className="fi-rs-angle-small-up" />
                          </a>
                        </div>
                      </td>

                      <td className="price">
                        <h4 className="text-brand">
                          ${(item.price * item.quantity).toFixed(2)}
                        </h4>
                      </td>

                      <td className="action text-center">
                        <a
                          className="text-body"
                          style={{ cursor: "pointer" }}
                          onClick={() => removeItem(item.productId)}
                        >
                          <i className="fi-rs-trash" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="border p-md-4 cart-totals ml-30">
              <table className="table no-border">
                <tbody>
                  <tr>
                    <td className="cart_total_label">
                      <h6 className="text-muted">Subtotal</h6>
                    </td>
                    <td className="cart_total_amount">
                      <h4 className="text-brand text-end">
                        ${cart.totalPrice.toFixed(2)}
                      </h4>
                    </td>
                  </tr>
                  

                    <td scope="col" colSpan={2}>
                            <div className="divider-2 mt-10 mb-10" />
                          </td>
                        
                        <tr>
                          <td className="cart_total_label">
                            <h6 className="text-muted">Shipping</h6>
                          </td>
                          <td className="cart_total_amount">
                            <h5 className="text-heading text-end">Free
                            </h5></td></tr>
                        <tr>
                          <td className="cart_total_label">
                            <h6 className="text-muted">Estimate for</h6>
                          </td>
                          <td className="cart_total_amount">
                            <h5 className="text-heading text-end">United Kingdom
                            </h5></td></tr>
                        



                  



                  <tr>
                    <td colSpan={2}>
                      <div className="divider-2 mt-10 mb-10" />
                    </td>
                  </tr>

                  <tr>
                    <td className="cart_total_label">
                      <h6 className="text-muted">Total</h6>
                    </td>
                    <td className="cart_total_amount">
                      <h4 className="text-brand text-end">
                        ${cart.totalPrice.toFixed(2)}
                      </h4>
                    </td>
                  </tr>
                </tbody>
              </table>

              <a className="btn mb-20 w-100" onClick={handleCheckout}>
  Proceed To CheckOut
  <i className="fi-rs-sign-out ml-15" />
</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShopCart;

// lib/cartApi.ts
export const addToCartApi = async (
  productId: number,
  quantity: number,
  guestId: string
) => {
  const res = await fetch("http://localhost:4000/cart/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productId,
      quantity,
      guestId,
    }),
  });

   

 console.log("Add to cart response status:", res);



  if (!res.ok) {
    throw new Error("Add to cart failed");
  }

  return res.json();
};



const BASE_URL = "http://localhost:4000";

export const getCartApi = async (guestId: string) => {
  const res = await fetch(`${BASE_URL}/cart/${guestId}`);
  return res.json();
};

export const updateCartApi = async (
  productId: number,
  quantity: number,
  guestId: string
) => {
  const res = await fetch(`${BASE_URL}/cart/update`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId, quantity, guestId }),
  });
  return res.json();
};

export const removeItemApi = async (
  productId: number,
  guestId: string
) => {
  const res = await fetch(
    `${BASE_URL}/cart/remove/${productId}/${guestId}`,
    { method: "DELETE" }
  );
  return res.json();
};

export const clearCartApi = async (guestId: string) => {
  const res = await fetch(`${BASE_URL}/cart/clear/${guestId}`, {
    method: "DELETE",
  });
  return res.json();
};















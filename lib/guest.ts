// utils/guest.ts
export const getGuestId = () => {
  if (typeof window === "undefined") return null;

  let guestId = localStorage.getItem("guestId");
  if (!guestId) {
    guestId = `g-${Date.now()}`;
    localStorage.setItem("guestId", guestId);
  }
  return guestId;
};

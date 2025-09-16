document.addEventListener("alpine:init", () => {
  Alpine.data("dropdown", () => ({
    items: [
      { id: 1, name: "G DRAGON", img: "show2.png", price: 600000 },
      { id: 2, name: "NCT THE DREAM SHOW 4", img: "show1.jpg", price: 500000 },
      { id: 3, name: "BLACK PINK", img: "show3.webp", price: 400000 },
      { id: 4, name: "THE BOYZ", img: "show4.jpg", price: 300000 },
    ],
  }));
});

// konversi ke Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

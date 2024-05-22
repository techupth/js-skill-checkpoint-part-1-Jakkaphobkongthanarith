// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
let totalPrice = 0;
for (let i in products) {
  totalPrice += products[i].price * products[i].quantity;
  console.log(totalPrice);
}
console.log(totalPrice);
let calculateTotalPrice = (products, promotionCode) => {
  switch (promotionCode) {
    case "SALE20":
      return products - (products * 20) / 100;
      break;
    case "SALE50":
      return products - (products * 50) / 100;
      break;
    default:
      return products;
  }
};

console.log(calculateTotalPrice(totalPrice, ""));
// ^ ans case 1, ไปเก็บโค้ดด้วย
console.log(calculateTotalPrice(totalPrice, "SALE20"));
// ^ ans case 2, ยังเร็วไม่พอ โค้ดเด็ดๆหมดละ
console.log(calculateTotalPrice(totalPrice, "SALE50"));
// ^ ans case 3, เดอะแฟลชมีอยู่จริงบนโลก
console.log(calculateTotalPrice(totalPrice, "kitty"));
// ^ ans case ?, โค้ดอะไรของเรา
console.log(calculateTotalPrice(totalPrice, "sale50"));
// ^ ans case ??, รีบจัด ลืมกดCAP

// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let leastProductName;
let leastProduct = inventory[0].quantity;
console.log(leastProduct);
for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].quantity < leastProduct) {
    leastProduct = inventory[i].quantity;
    leastProductName = inventory[i].name;
  }
}
console.log(leastProduct);
console.log(leastProductName);
ans =
  "สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ " +
  leastProductName +
  " ซึ่งมี " +
  leastProduct +
  " ชิ้น";
console.log(ans);
// ^ ans 1 สารภาพว่าผมขก.เปิดเนตไปก๊อบตัวอักษร backtick มา ( เครื่องผมใช้ปุ่มนั้นในการเปลี่ยนภาษา) เลยไม่ใช้ ${leastProductName}, ${leastProduct} งับ แหะๆ

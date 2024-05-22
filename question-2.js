// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200; // edit Apple quantity from 100 to200
console.log(inventory[0]);
// ^ ans 1
let orange = { name: "Orange", price: 20, quantity: 300 }; // add product with name: Orange, price =20 and quantity = 300
inventory.push(orange); // now add the product(that are in for m of object) into the array using .push for add it into the last index
console.log(inventory);
// ^ ans 2
// calculate total price in item basket
console.log(inventory.length);
console.log(inventory[0].price * inventory[0].quantity);
console.log(inventory[1].price * inventory[1].quantity);
console.log(inventory[2].price * inventory[2].quantity);
// so 7000 + 500 + 6000 should be 13500 if everythign work correctly
totalPrice = 0;
for (let i = 0; i < inventory.length; i++) {
  totalPrice += inventory[i].price * inventory[i].quantity;
  console.log(totalPrice);
}
console.log(totalPrice);
ans = "มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก " + totalPrice + " บาท";
console.log(ans);
// ^ and 3

// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
let checkPasswordStrength = (userPassword) => {
  if (userPassword.length < 6) {
    return "Weak";
  } else if (userPassword.length >= 6 && userPassword.length <= 10) {
    return "Medium";
  } else {
    return "Strong";
  }
};

userPassword = "ssswnalWadqQ";
console.log(userPassword.length);
console.log("ssswnalWadqQ".length);
console.log(checkPasswordStrength(userPassword)); // "Strong"
// ^ ans case 1
let userPassword2 = "TechUp";
console.log(checkPasswordStrength(userPassword2)); // "Medium"
// ^ ans case 2
let userPassword3 = "abcde";
console.log(checkPasswordStrength(userPassword3)); // "Weak"
// ^ ans case 3
let userPassword5 = "55555";
console.log(checkPasswordStrength(userPassword5)); // "weak"
let userPassword6 = "666666";
console.log(checkPasswordStrength(userPassword6)); // "Medium"
let userPassword9 = "9999999999";
console.log(checkPasswordStrength(userPassword9)); // "Medium"
let userPassword10 = "1010101010";
console.log(checkPasswordStrength(userPassword10)); // "Medium"
let userPassword11 = "11111111111";
console.log(checkPasswordStrength(userPassword11)); // "Strong"
let userPasswordtesteiei = "งานไม่ส่ง มัวแต่เล่น";
console.log(checkPasswordStrength(userPasswordtesteiei)); // "Strong"

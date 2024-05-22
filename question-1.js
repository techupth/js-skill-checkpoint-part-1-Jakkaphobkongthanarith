// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
let myTodo_5 = { id: 5, todo: "Walk a dog" };
myTodo.push(myTodo_5); // create new todo
console.log(myTodo);
// ^ ans for 1
console.log(myTodo[3]);
myTodo[3].todo = "Go to the Gym"; // change no.4 or index 3,todo: go to gym
console.log(myTodo);
// ^ and for 2
myTodo.pop(); // bomb last items in object, aka mytodo[4]: walk a dog
console.log(myTodo);
// ^ ans for 3
console.log("To-do id:" + myTodo[3].id + ", " + myTodo[3].todo);
// ^ display last todo rn using console.log, aka ans for 4

const [tomato, benanra, orange] = ['🍅', '🍌', '🍊'];

const fruits = ['🍉', '🍓', ['🍍', '🥭'],'🍑']; 
 const [,,[,mango],] = fruits;

 const [watermelon, storawberry, ...rest] = fruits;
 console.log(watermelon, storawberry); // 🍉 🍓

console.log(fruits == [...fruits]); // 🍉 🍓 🍍 🥭 🍑

//-----------------------Swapping Variables-----------------------

let a = 5;
let b = 10;

[a, b] = [b, a];

console.log(a); // 10
console.log(b); // 5

 
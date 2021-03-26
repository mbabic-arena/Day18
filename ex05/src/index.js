// Only change code below this line
let shoppingList = new Map([
  ["Banana", 4],
  ["Pineapple", 2],
  ["Pear", 6],
  ["Carrot", 5],
  ["Apple", 9],
]);

let arrKey = [];
let arrValue = [];

for (let col of shoppingList.entries()) {
  arrKey.push(col[0]);
  console.log(`groceries: ${col[0]}`);
}
for (let col of shoppingList.entries()) {
  arrKey.push(col[1]);
  console.log(`groceries: ${col[1]}`);
}
for (let col of shoppingList.entries()) {
  console.log([col[0], col[1]]);
}
// Only change code above this line
module.exports = { shoppingList, arrKey, arrValue };

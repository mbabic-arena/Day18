// Only change code below this line
let shoppingList = new Map([
  ["Banana", 4],
  ["Pineapple", 2],
  ["Pear", 6],
  ["Carrot", 5],
  ["Apple", 9],
]);

let arrKey = [];

for (let key of shoppingList.keys()) {
  arrKey.push(key);
}
arrKey.forEach((key) => {
  console.log("groceries: ", key);
});
let arrValue = [];

for (let value of shoppingList.values()) {
  arrValue.push(value);
}
arrValue.forEach((value) => {
  console.log("amount: ", value);
});
for (let [key, value] of shoppingList.entries()) {
  console.log(`[ '${key}', ${value} ]`);
}
// Only change code above this line
module.exports = { shoppingList, arrKey, arrValue };

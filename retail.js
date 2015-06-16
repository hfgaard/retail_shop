var item = require("./item.js");
var store = require("./store.js");
var register = require("./register.js")

var dress = new item("Dress", 12.99);
var shirt = new item("Shirt", 5.99);
var pants = new item("Pants", 24.99);

var store1 = new store();
var register1 = new register(store1);

store1.addItem(dress);
store1.addItem(shirt);
store1.addItem(pants);

store1.discountItem(dress, .15);
store1.discountStore(.20);

register1.addItem(dress);
register1.addItem(shirt);
register1.removeItem(shirt);
register1.addItem(pants);

console.log(register1.total);
console.log(store1);

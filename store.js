module.exports = function Store() {
  this.inventory = {};

  this.addItem = function(item) {
    this.inventory[item.name] = item;
  };

  this.sellItem = function(item) {
    delete this.inventory[item.name];
  };

  this.discountItem = function(item, discount) {
    if (this.inventory[item.name].discount > 0) {
      this.inventory[item.name].discount = this.inventory[item.name].discount - (this.inventory[item.name].discount * discount);
    } else {
      this.inventory[item.name].discount = this.inventory[item.name].price - (this.inventory[item.name].price * discount);
    }
  };

  this.discountStore = function(discount) {
    for (var item in this.inventory) {
      if (this.inventory[item].discount > 0) {
        this.inventory[item].discount = this.inventory[item].discount - (this.inventory[item].discount * discount);
      } else {
        this.inventory[item].discount = this.inventory[item].price - (this.inventory[item].price * discount);
      }
    }
  };
};

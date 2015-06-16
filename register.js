module.exports = function Register(store) {
  this.total = 0.00;
  this.store = store;

  this.addItem = function(item) {
    if (item.discount > 0) {
      this.total += parseFloat(item.discount);
    } else {
      this.total += parseFloat(item.price);
    }
    
    this.store.sellItem(item);
  };

  this.removeItem = function(item) {
    if (item.discount > 0) {
      this.total -= parseFloat(item.discount);
    } else {
      this.total -= parseFloat(item.price);
    }
    
    this.store.addItem(item);
  };
};

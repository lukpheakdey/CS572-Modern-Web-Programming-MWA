const item = {
    "name": "Biscuits",
    "type": "regular",
    "category": "food",
    "price": 200
};
  
var applyCoupon = function(item) {
    function calculateDiscount(discountPercentage) {
        this.price = this.price * (1 - discountPercentage * 0.01);
        return item;
    }
    return calculateDiscount.bind(item);
};
  
console.log(applyCoupon(item)(10).price);
  
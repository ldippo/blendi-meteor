Template.cart.helpers ({
 currency: function(number){
   return "$" + Number(number).toFixed(2);
 }

});
Template.cart.helpers ({
 cartitems: function(){
   var shopCart = [];
   var cartItems = CartItems.find();
   var total = 0;
   cartItems.forEach(function(cartitem){
     var product = Products.findOne({_id:cartitem.product});
     cartitem.productname = product.name;
     cartitem.price = (Number(product.price) * cartitem.qty);
     total += cartitem.price;
     shopCart.push(cartitem);
   });
   shopCart.subtotal = total;
   shopCart.tax = shopCart.subtotal * 0.06;
   shopCart.total = shopCart.tax + shopCart.subtotal;
   return shopCart;
 }

});
Template.cart.events ({
 "click .removeci" :function(evt,tmpl){
   Meteor.call('removeCartItem', this._id);
 }

});

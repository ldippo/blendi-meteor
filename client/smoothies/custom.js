Meteor.subscribe("customsmoothies");
Template.custom.helpers ({
  ingredientlist: function(){
    return CustomIngredients.find();
  }
});

Template.custom.helpers ({
 customprice: function(){
     var shopCart = [];
     var cartItems = CustomIngredients.find();
     var total = 0;
     cartItems.forEach(function(cartitem){
       var cost = (Number(cartitem.price) * Number(cartitem.qty));
       total += cost;
       shopCart.push(cartitem);
     });
     shopCart.subtotal = total;
     console.log(shopCart.tax = shopCart.subtotal * 0.06);
     shopCart.total = shopCart.tax + shopCart.subtotal;
     return shopCart;
   }

});
Template.custom.events ({
 "click .removeingred" :function(evt,tmpl){
   Meteor.call('removeCustomIngredient', this._id);
 }

});

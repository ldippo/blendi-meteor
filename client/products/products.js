Template.products.helpers ({
 Catnotselected: function(){
   return Session.equals("category", null);
 }
});
Template.products.helpers ({
  Category: function(){
    return Session.get("category");
  }
});
Template.products.helpers ({
  productlist: function(){
    return Products.find({catName:Session.get('category')});
  }
});

Template.product.helpers ({
 currency: function(number){
   return "$" + Number(number).toFixed(2);
 }

});
Template.product.events ({
 "click .addcart" :function(evt,tmpl){
   var qty = tmpl.find('.prodqty').value;
   var product = this._id;
   var sessid = Meteor.default_connection._lastSessionId;
   Meteor.call('addToCart', qty, product, sessid);
 }

});

Template.products.rendered = function(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
  };

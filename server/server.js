Meteor.startup(function(){
  if(Products.find().count() === 0){
    Products.insert({thumb: "http://lorempixel.com/100/100", name: "Apple Pie", price: 2.50, desc: "Awesome Apple Pie", catName: "Fruity"});
    Products.insert({thumb: "http://lorempixel.com/100/100", name: "Blackberry Pie", price: 3.50, desc: "Awesome Blackberry Pie", catName: "Fruity"});
    Products.insert({thumb: "http://lorempixel.com/100/100", name: "Engine", price: 22.50, desc: "Awesome V12", catName: "Mods"});

  }
  if(Categories.find().count() === 0){
    var hwid = Categories.insert({name: 'HARDWARE'});
    var juid = Categories.insert({name: "JUICE"});
    SubCategories.insert({name: 'Mods', cat:hwid});
    SubCategories.insert({name: 'Fruity', cat:juid});
    SubCategories.insert({name: 'Sweet', cat:juid});
  }
});
Meteor.methods({
  addToCart: function(qty, product, session){
    if(qty > 0){
      CartItems.insert({qty:qty,product:product,sessid:session});
    } else {
      console.log('Quantity is Zero');
    }
  },
  removeCartItem: function(id){
    CartItems.remove({_id:id});
  }
});

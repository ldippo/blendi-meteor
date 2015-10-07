Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {CustomIngredients : []}});
  } else {
    this.ready();
  }
});
Meteor.publish("ingredientData", function () {
  return Ingredients.find();
});

Meteor.publish("customsmoothies", function () {
  return CustomIngredients.find({$or: [{"public": true},
                             {owner: this.userId}]});
});


Meteor.startup(function(){
  if(Products.find().count() === 0){
    Products.insert({thumb: "http://lorempixel.com/100/100", name: "Apple Blast", price: 2.50, desc: "Awesome Apple Pie", catName: "Fruity", ingredients: ["Creatine", "Apples", "Bannanas"]});
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
  if(Ingredients.find().count() === 0){
    var baid = Ingredients.insert({name: 'BASES'});
    var boid = Ingredients.insert({name: 'BOOSTERS'});
    var prid = Ingredients.insert({name: 'PRODUCE'});
    Bases.insert({name: 'Milk', price: 0.20, cat:baid});
    Produce.insert({name: 'Fruit', price: 0.25, cat:prid});
    Boosters.insert({name: 'Caffeine', price: 0.3, cat:eorboid});
    CustomIngredients.insert({name: "Ingredient", price: 0, qty: 3, owner: this.userId});
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
  },
  addToCustom: function(qty, ingredient, name, price, session){
    if(qty > 0){
      CustomIngredients.insert({qty:qty,ingredient:ingredient, name:name, price:price, sessid:session});
    } else {
      console.log('Quantity is Zero');
    }
  },
  removeCustomIngredient: function(id){
    CustomIngredients.remove({_id:id});
  }
});

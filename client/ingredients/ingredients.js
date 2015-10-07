Meteor.subscribe('ingredientData');
Meteor.subscribe('basesData');
Meteor.subscribe('boosterData');
Meteor.subscribe('produceData');


Template.ingredients.helpers({
  Ingredients: function(){
    return Ingredients.find();
  },
  Boosters: function(){
    return Boosters.find({cat: this._id});
  },
  Bases: function(){
    return Bases.find({cat: this._id});
  },
  Produce: function(){
    return Produce.find({cat: this._id});
  }
});


Template.ingredients.events ({
 "click .addcustom" :function(evt,tmpl){
   var qty = tmpl.find('.ingredqty').value;
   var ingredient = this._id;
   var name = this.name;
   var price = this.price;
   var sessid = Meteor.default_connection._lastSessionId;
   Meteor.call('addToCustom', qty, ingredient, name, price, sessid);
 }
});

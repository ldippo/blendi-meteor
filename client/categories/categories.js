Template.categories.helpers({
  Categories: function(){
    return Categories.find();
  }
});

Template.categories.helpers({
  SubCategories: function(){
    return SubCategories.find({cat: this._id});
  }
});

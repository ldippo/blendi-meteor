Router.route('/', function () {


  this.layout('layout');

  this.render('ingredients', {to: "ingredients"});
  this.render('custom', {to: "custom"});

  this.render('products',
  {
    to: "products",
    data: function(){
      Session.set('category', this.params.name);
    }
  });

  this.render("cart", {to: "cart"});

  this.render("categories", {to: "categories"});


});

Router.route('/:name', function(){
  var params = this.params;
  var id = params.name;

  this.layout('layout');

  this.render('ingredients', {to: "ingredients"});

  this.render("cart", {to: "cart"});

  this.render("categories", {to: "categories"});
  this.render('products',
    {
    to: "products",
    data: function () {
      Session.set('category', this.params.name);
    }
  });
});

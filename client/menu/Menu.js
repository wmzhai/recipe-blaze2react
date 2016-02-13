Template.Menu.onCreated(function() {
  var self = this;
  self.autorun( function(){
     self.subscribe('recipes');
  });
});

Template.Menu.helpers({
  menu: function(){
    return Menu;
  },
  recipes: function(){
    return Recipes.find({inMenu:true});
  }
});
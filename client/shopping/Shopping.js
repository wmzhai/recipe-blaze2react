Template.Shopping.onCreated(function() {
  var self = this;
  self.autorun( function(){
    self.subscribe('recipes');
  });
});

Template.Shopping.helpers({
  shopping: function(){
    return Recipes.find({inMenu:true});
  }
});

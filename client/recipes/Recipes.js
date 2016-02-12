

Template.Recipes.onCreated(function () {
  var self = this;
  self.autorun(function() {
    self.subscribe('recipes');
  });
});

Template.Recipes.helpers({
  recipes: function () {
    options = {
      sort: {
        createdAt: -1
      }
    };
    return Recipes.find({}, options);
  }
});

Template.Recipes.events({
  'click .new-recipe': function(){
    Session.set('newRecipe', true);
  }
});
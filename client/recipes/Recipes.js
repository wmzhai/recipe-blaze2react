Template.Recipes.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('recipes');
  });
});

Template.Recipes.helpers({
  ready: function () {
    return Template.instance().subscriptionsReady();
  },
  recipes: function () {
    options = {
      sort: {
        createdAt: -1
      }
    };
    return Recipes.find({}, options);
  },
  newRecipeComponent() {
    return NewRecipe;
  }
});

Template.Recipes.events({
  'click .new-recipe': function () {
    Session.set('newRecipe', true);
  }
});

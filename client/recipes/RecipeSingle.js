Template.RecipeSingle.onCreated(function () {
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('recipeSingle',id);
  });
});

Template.RecipeSingle.helpers({
  recipe: function () {
    var id = FlowRouter.getParam('id');
    return Recipes.findOne(id);
  }
});
Template.Recipe.onCreated(function(){
  this.editMode = new ReactiveVar(false);
});

Template.Recipe.events({
  'click .toggle-menu': function() {
    Meteor.call('toggleMenuItem', this._id, this.inMenu);
  },
  'click .fa-trash': function(){
    Meteor.call('deleteRecipe',this._id);
  },
  'click .fa-pencil': function(e,t) {
    t.editMode.set(!t.editMode.get());
  }
});

Template.Recipe.helpers({
  updateRecipeId:  function(){
    return this._id;
  },
  editMode: function() {
    return Template.instance().editMode.get();
  }
});
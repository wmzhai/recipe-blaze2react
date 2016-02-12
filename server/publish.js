Meteor.publish('recipes', function () {
  //Meteor._sleepForMs(5000);

  return Recipes.find({owner: this.userId});
});

Meteor.publish('recipeSingle', function (id) {
  check(id, String);
  return Recipes.find({_id: id});
});
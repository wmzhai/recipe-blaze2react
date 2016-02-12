Recipes = new Mongo.Collection('recipes');

Recipes.allow({
  insert: function( userId, doc) {
    return !!userId;
  },
  update: function( userId, doc) {
    return !!userId;
  }
});

Ingredient = new SimpleSchema({
  name: {
    type: String,
    label: '名称'
  },
  amount: {
    type: String,
    label: '数量'
  }
});

RecipesSchema = new SimpleSchema({
  name: {
    type: String,
    label: '名称'
  },
  desc: {
    type: String,
    label: '描述'
  },
  ingredients: {
    type: [Ingredient],
    label: '原料'
  },
  inMenu: {
    type: Boolean,
    defaultValue: false,
    optional: true,
    autoform: {
      type: 'hidden'
    }
  },
  owner: {
    type: String,
    label: '创建人',
    autoValue: function() {
      return this.userId;
    },
    autoform: {
      type: 'hidden'
    }
  },
  createdAt: {
    type: Date,
    label: '创建日期',
    autoValue: function () {
      return new Date;
    },
    autoform: {
      type: 'hidden'
    }
  }
});

Recipes.attachSchema(RecipesSchema);

Meteor.methods({
  toggleMenuItem: function( id, currentState){
    Recipes.update(id, {
      $set: {
        inMenu: !currentState
      }
    });
  },
  deleteRecipe: function(id){
    check(id, String);
    Recipes.remove(id);
  }
});
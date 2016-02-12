FlowRouter.triggers.enter([function(){
    if(!Meteor.userId()){
      FlowRouter.go('home');
    }
}]);

Accounts.onLogin(function(){
  FlowRouter.go('recipes');
});

Accounts.onLogout(function(){
  FlowRouter.go('home');
});


FlowRouter.route('/', {
  name: 'home',
  action() {
    if( Meteor.userId() ){
      FlowRouter.go('recipes');
    }
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/recipes', {
  name: 'recipes',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Recipes'});
  }
});

FlowRouter.route('/recipes/:id', {
  name: 'recipe',
  action() {
    BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
  }
});

FlowRouter.route('/menu', {
  name: 'menu',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Menu'});
  }
});

FlowRouter.route('/shopping', {
  name: 'shopping',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Shopping'});
  }
});
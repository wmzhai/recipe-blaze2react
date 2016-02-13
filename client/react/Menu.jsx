Menu = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    Meteor.subscribe('recipes');
    return {
      menus: Recipes.find({inMenu: true}).fetch(),
      count: Recipes.find({inMenu: true}).count()
    }
  },
  renderMenus() {
    return this.data.count > 0 ?
      this.data.menus.map((recipe) => {
        return (
          <div className="menu-item" key={recipe._id}>
            <h3>{recipe.name}</h3>
            <p>{recipe.desc}</p>
          </div>
        );
      }) :
      <h3>请从 <a href="/recipes">菜谱</a> 里面选择菜品到菜单</h3>;
  },
  render() {
    return (
      <div>
        <h1 className="page-title">当前菜单</h1>
        {this.renderMenus()}
      </div>
    );
  }
});

Menu = React.createClass({
  render() {

    const allMenus = this.props.recipes.map((recipe) => {
      return (
        <div className="menu-item" key={recipe._id}>
          <h3>{recipe.name}</h3>
          <p>{recipe.desc}</p>
        </div>
      );
    });


    if (this.props.recipes.count() > 0) {
      return (
        <div>
          {allMenus}
        </div>
      )
    } else {
      return (
        <h3>请从 <a href="/recipes">菜谱</a> 里面选择菜品到菜单</h3>
      )
    }

  }
});

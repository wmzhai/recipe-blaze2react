NewRecipe = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    var name = e.target.nameInput.value;
    var desc = e.target.descInput.value;

    Meteor.call('insertRecipe', name, desc);
  },
  render() {
    return (
      <div className="new-recipe-container">
        <h2>添加菜谱</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="nameInput" placeholder="名称"/>
          <input type="text" name="descInput" placeholder="描述"/>
          <input type="submit" value="添加" className="btn btn-primary"/>
        </form>
        <i className="fa fa-close"></i>
      </div>
    );
  }
});
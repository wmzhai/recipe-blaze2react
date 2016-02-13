SideNav = React.createClass({
  render() {
    return (
      <div className="side-nav">
        <ul>
          <li><a href="/recipes"> <i className="fa fa-list"></i> 菜谱</a></li>
          <li><a href="/menu"> <i className="fa fa-map-o"></i> 菜单</a></li>
          <li><a href="/shopping"> <i className="fa fa-shopping-cart"></i> 购物车</a></li>
        </ul>
      </div>
    );
  }
});
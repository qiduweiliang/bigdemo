import React, { PropTypes } from 'react'
import { Link } from 'react-router';
class NavFooter extends React.Component {
  render () {
    return(
      <div className="nav-footer">
        <Link to="/" activeStyle={{color:"#7c4DEF"}} onlyActiveOnIndex={true}><span className="glyphicon glyphicon-home"></span>Home</Link>
        <Link to="/blog" activeStyle={{color:"#7c4DEF"}}><span className="glyphicon glyphicon-list-alt"></span>Blog</Link>
        <Link to="/work" activeStyle={{color:"#7c4DEF"}}><span className="glyphicon glyphicon-folder-open"></span>Work</Link>
        <Link to="/about" activeStyle={{color:"#7c4DEF"}}><span className="glyphicon glyphicon-user"></span>About</Link>
      </div>
    )
  }
}

export default NavFooter;

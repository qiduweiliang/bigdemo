import React, { PropTypes } from 'react'
import { Link } from 'react-router';
class LeftNav extends React.Component {
  render () {
    return(
      <div className="left-nav">
        <h3>QiDuWeiLiang@{this.props.title}</h3>
        <Link to="/" activeStyle={{backgroundColor:'rgba(0,0,0,0.3)'}} onlyActiveOnIndex={true}><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link>
        <Link to="blog" activeStyle={{backgroundColor:'rgba(0,0,0,0.3)'}}><span className="glyphicon glyphicon-book" aria-hidden="true"></span>Blog</Link>
        <Link to="work" activeStyle={{backgroundColor:'rgba(0,0,0,0.3)'}}><span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>Work</Link>
        <Link to="about" activeStyle={{backgroundColor:'rgba(0,0,0,0.3)'}}><span className="glyphicon glyphicon-user" aria-hidden="true"></span>Me</Link>
      </div>
    )
  }
}
export default LeftNav;

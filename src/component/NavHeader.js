import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
  render () {
    return(
      <div className="nav-header">
        <p><span className="glyphicon glyphicon-chevron-left"></span>Back</p>
        <h3>QiDuWeiLiang@Home</h3>
        <p><span className="glyphicon glyphicon-flash"></span></p>
      </div>
    )
  }
}

export default NavHeader;

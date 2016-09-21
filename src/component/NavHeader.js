import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
  handleBack(){
    this.context.router.goBack();
  }	
  render () {
    return(
      <div className="nav-header">
        <p onClick={this.handleBack.bind(this)}><span className="glyphicon glyphicon-chevron-left"></span>Back</p>
        <h3>QiDuWeiLiang@{this.props.title}</h3>
        <p><span className="glyphicon glyphicon-flash"></span></p>
      </div>
    )
  }
}
NavHeader.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default NavHeader;

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { select } from '../actions/index';

class UsersList extends Component {
  /* eslint-disable */
  showList() {
    return this.props.users.map((user) => {
      return (
        //<li onClickCapture={() => this.props.select(user)} key={user.id}>
        <li onClick={() => this.props.select(user)} key={user.id}>
          {user.name}
        </li>
      );
    });
  }
  /* eslint-enable */
  render() {
    return <ol>{this.showList()}</ol>;
  }
}
function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ select: select }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UsersList);

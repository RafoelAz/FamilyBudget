import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
  render() {
    if (!this.props.user) {
      return <p>Select user to view details</p>;
    }
    return (
      <div>
        <h2>{this.props.user.name}</h2>
        <p>Registration date :{this.props.user.data}</p>
        <p>
          Earned money in this month: <b>{this.props.user.month}$</b>
          <br />
          Earned money in a year: <b>{this.props.user.year}$</b>
          <br />
          Total money: <b>{this.props.user.total_money}$</b>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.active,
  };
}

export default connect(mapStateToProps)(Details);

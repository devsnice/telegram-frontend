import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './model/reducer';

class Auth extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.loginAttempt}>try to attempt</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    auth: state.auth
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(Auth);

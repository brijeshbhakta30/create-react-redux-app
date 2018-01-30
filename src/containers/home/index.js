import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

class Home extends React.Component {

  render() {
    return (
      <div className="container">Dash Board</div>
    );
  }
}

const mapStateToProps = state => ({ user: state.auth && state.auth.user });

const mapDispatchToProps = dispatch => bindActionCreators({
  goToHome: () => push('/')
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

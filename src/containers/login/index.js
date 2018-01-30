import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import {
  logInUser,
  logOutUser,
} from '../../modules/auth';

import './login.css';

const initialState = {
  credentials: {
    email: '',
    password: ''
  }
};

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  handleChange = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const { name, value } = e.currentTarget;
    const { credentials } = this.state;
    credentials[name] = value;
    this.setState({ credentials });
  };

  handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const { logInUser, goToHome } = this.props;
    logInUser(this.state.credentials)
      .then(user => goToHome(user))
      .catch(e => console.log(e));
  };

  render() {
    const { credentials } = this.state;
    return (
      <div className="login-wrapper">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="email" sm={2}>Email</Label>
            <Col sm={10}>
              <Input type="email" name="email" id="email" placeholder="Email" value={credentials.email} onChange={this.handleChange} required/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="password" sm={2}>Password</Label>
            <Col sm={10}>
              <Input type="password" name="password" id="password" placeholder="Password" value={credentials.password} onChange={this.handleChange} required/>
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button type="submit" >Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.auth && state.auth.user });

const mapDispatchToProps = dispatch => bindActionCreators({
  logInUser,
  logOutUser,
  goToHome: () => push('/')
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

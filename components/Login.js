import React, {Component} from 'react';
import {Text} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
} from 'native-base';
import {connect} from 'react-redux';
import loginService from '../services/user/login';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onUsernamChange = text => {
    this.setState({
      email: text,
    });
  };

  onPasswordChange = text => {
    this.setState({
      password: text,
    });
  };

  onLogin = () => {
    this.props.loginFn(this.state.email);
  };

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Username"
                onChangeText={this.onUsernamChange}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Password"
                onChangeText={this.onPasswordChange}
              />
            </Item>
            <Button
              primary
              style={{color: 'white', textAlign: 'center'}}
              onPress={this.onLogin}>
              <Text>Login</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loginReducer: state.loginReducer,
});

const mapDisptachToProps = dispatch => ({
  loginFn: email => dispatch(loginAction.bind(this, email)),
});

const loginAction = (email, dispatch) => {
  loginService.getLoginData(email).then(response => {
    dispatch({
      type: 'LOGIN',
      payload: {...response, email: email},
    });
  });
};

export default connect(
  mapStateToProps,
  mapDisptachToProps,
)(Login);

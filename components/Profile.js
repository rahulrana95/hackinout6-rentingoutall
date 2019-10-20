import React, {Component} from 'react';
import {View} from 'react-native';
import {
  Container,
  Header,
  Content,
  Thumbnail,
  Text,
  Spinner,
} from 'native-base';
import {connect} from 'react-redux';
import profileService from '../services/user/profile';
import Image from './widgets/Image';
import HeaderComponent from './Header';

class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  componentDidMount() {
    this.props.addData('5dab60c81c9d440000212749');
  }

  render() {
    const profileData = this.props.profileReducer;
    if (profileData.isLoading) {
      return <Spinner color="green" />;
    }
    return (
      <Container>
        <HeaderComponent navigation={this.props.navigation} />
        <Container
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 10,
          }}>
          <Content style={{height: 100, border: '1 solid red'}}>
            <Image />
          </Content>
          <Content>
            <Text>Name: {profileData.name}</Text>
          </Content>
          <Content>
            <Text>Date of Birth: {profileData.dob}</Text>
          </Content>
          <Content>
            <Text>contact: {profileData.contact}</Text>
          </Content>
          <Content>
            <Text>Address: {profileData.dob}</Text>
          </Content>
          <Content>
            <Text>Email: {profileData.dob}</Text>
          </Content>
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  profileReducer: state.profileReducer,
});

const mapDisptachToProps = dispatch => ({
  addData: id => dispatch(addData.bind(this, id)),
});

const addData = (id, dispatch) => {
  dispatch({
    type: 'LOADING',
  });

  profileService
    .getProfileData(id)
    .then(response => {
      dispatch({
        type: 'ADD',
        payload: response,
      });
    })
    .catch(err => {
      dispatch({
        type: 'FAILED',
      });
    });
};

export default connect(
  mapStateToProps,
  mapDisptachToProps,
)(Profile);

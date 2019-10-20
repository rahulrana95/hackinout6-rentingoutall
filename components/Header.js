import React, {Component} from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Container, Header, Left, Icon, Content} from 'native-base';
import {incrementAction, getCategoriesAction} from '../actions/home';
import Item from './widgets/Item';

class HeaderComponent extends Component {
  static navigationOptions = {
    title: 'Header',
  };

  render() {
    return (
      <Header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Content>
          <Icon ios="ios-menu" android="md-menu" onPress={this.onMenuPress} />
        </Content>
        <Content>
          <Text>Home</Text>
        </Content>
      </Header>
    );
  }

  onMenuPress = () => {
    this.props.navigation.openDrawer();
  };
}

const mapStateToProps = state => ({
  categoriesReducerData: state.categoriesReducer.data,
});

const mapDisptachToProps = dispatch => ({
  increment: () => dispatch(incrementAction),
  getCategories: () => dispatch(getCategoriesAction),
});

export default connect(
  mapStateToProps,
  mapDisptachToProps,
)(HeaderComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    color: 'white',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

import React, {Component} from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Container, Header, Left, Icon, Content} from 'native-base';
import {incrementAction, getCategoriesAction} from '../actions/home';
import Item from './widgets/Item';
import HeaderComponent from './Header';
import Login from './Login';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount() {
    this.props.getCategories();
  }

  renderItems = () => {
    return this.props.categoriesReducerData.map(category => {
      return <Item category={category} key={category.id} />;
    });
  };

  render() {
    console.log('home');
    console.log(this.props.loginReducer);
    if (this.props.loginReducer.loggedIn === false) {
      return <Login />;
    }

    return (
      <Container>
        <HeaderComponent navigation={this.props.navigation} />
        <Content
          contentContainerStyle={{
            padding: 20,
          }}>
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              {this.renderItems()}
            </ScrollView>
          </SafeAreaView>
        </Content>
      </Container>
    );
  }

  onMenuPress = () => {
    this.props.navigation.openDrawer();
  };
}

const mapStateToProps = state => ({
  categoriesReducerData: state.categoriesReducer.data,
  loginReducer: state.loginReducer,
});

const mapDisptachToProps = dispatch => ({
  increment: () => dispatch(incrementAction),
  getCategories: () => dispatch(getCategoriesAction),
});

export default connect(
  mapStateToProps,
  mapDisptachToProps,
)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

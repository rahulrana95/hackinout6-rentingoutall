/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Provider} from 'react-redux';
import store from './stores/store';
import Home from './components/Home';
import Profile from './components/Profile';
import SideMenu from './components/SideMenu';

// route config

const routeConfig = {
  Home: {
    screen: Home,
  },
  Profile: {
    screen: Profile,
  },
};

// const StackNavigator = createStackNavigator(routeConfig, {
//   intialRouteName: 'Home',
//   headerMode: 'none',
//});

const MenuConfig = createAppContainer(
  createDrawerNavigator(routeConfig, {
    drawerPosition: 'left',
    contentComponent: SideMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerClose: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggleRoute',
  }),
);

//const AppContainer = createAppContainer(StackNavigator);

class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <MenuConfig />
        </Provider>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

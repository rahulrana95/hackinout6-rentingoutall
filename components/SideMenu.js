import React, {Component} from 'react';
import {Image, Text, ScrollView} from 'react-native';
import {Container, Body, Header, Content} from 'native-base';
import SafeAreaView from 'react-native-safe-area-view';
import {DrawerNavigatorItems} from 'react-navigation-drawer';

const SideMenu = props => (
  <ScrollView>
    <Container>
      <Header style={{height: 200, backgroundColor: 'white'}}>
        <Body style={{flex: 1, justifyContent: 'center'}}>
          <Image
            style={{borderRadius: 600, width: 200}}
            source={require('../assets/images/coder.jpeg')}
          />
        </Body>
      </Header>

      <DrawerNavigatorItems {...props} />
    </Container>
  </ScrollView>
);

export default SideMenu;

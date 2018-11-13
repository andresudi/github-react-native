/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, Fragment } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  NavigationActions
} from "react-navigation";
import { Container, Header, Content, Icon, Button } from "native-base";
import { Provider } from "react-redux";
import store from "./src/store/index";

import Home from "./src/components/Home";
import Search from "./src/components/Search"
import Detail from './src/components/Detail'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <BottomNav />
        </Fragment>
      </Provider>
    );
  }
}

const homeStackNav = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      headerTitle: (
        <View style={styles.nav}>
          <Image
            source={{
              uri:
                "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Logo.png"
            }}
            style={styles.image}
          />
        </View>
      ),
      title: `Home`,
      headerBackTitle: "A much too long text for back button from B to Home",
      headerTruncatedBackTitle: `Home`
    })
  },
  Detail
});

const searchStackNav = createStackNavigator({
  Add: {
    screen: Search,
    navigationOptions: () => ({
      headerTitle: (
        <View style={styles.nav}>
          <Image
            source={{
              uri:
                "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Logo.png"
            }}
            style={styles.image}
          />
        </View>
      )
    })
  },
  Detail
});

const BottomNav = createBottomTabNavigator({
  Home: homeStackNav,
  Search: searchStackNav,
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      if (routeName === 'Home') {
        return <Image source={{uri: "https://png2.kisspng.com/20180320/wsw/kisspng-iphone-mobile-app-pocket-android-application-packa-windows-tasks-for-icons-5ab109b85f07c6.0633142515215518003893.png"}} style={{ width: 22, height: 22 }}/>
      } else if (routeName === 'Search') {
        return <Image source={{uri: "https://cdn0.iconfinder.com/data/icons/lamar/512/Loop-512.png"}} style={{ width: 22, height: 22 }}/>
      } 
    },
  }),
  tabBarOptions: {
    showLabel: true,
    activeTintColor: '#f2f2f2',
    activeBackgroundColor: '#005299',
    inactiveTintColor: '#ccc',
    style: {
      backgroundColor: '#003b6f'
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  image: {
    width: 100,
    height: 40,
    marginLeft: 15,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  nav: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f5f6fa",
    justifyContent: "center"
  }
});

import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { Picker, Item, Icon, Spinner, Text as TextNativeBase } from 'native-base';
import { connect } from "react-redux";
// import { getTodo } from "../store/action/todoAction";
import { getUsers } from "../store/action/indexAction"

import Card from '../components/Card'

export class Home extends Component {
  componentDidMount = () => {
    // this.props.getTodo()
    this.props.getUsers()
    console.log(this.props)
  };

  render() {
    return (
        <Fragment>
            <ScrollView>
                {
                    (
                        <FlatList 
                            data={this.props.users}
                            keyExtractor={(index) => index.id}
                            keyExtractor={(index) => index.id}
                            renderItem={({ item }) => (
                              <Fragment>
                                  {
                                    <Card data={item}{...this.props}/>
                                  }
                              </Fragment>
                            )}
                        />
                    )
                }
            </ScrollView>
        </Fragment>
    )
  }
}

const mapStateToProps = state => {
    return {
        users: state.indexReducer.users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(getUsers())
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

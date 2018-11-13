import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableHighlight,
  ScrollView
} from "react-native";
import {
  Content,
  Container,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Left,
  Body,
  H3,
  Right,
  Spinner
} from "native-base";
import axios from "axios";
import moment from "moment";

class Detail extends Component {
  state = {
    userDetail: [],
    isLoading: true
  };
  user = () => {
    axios({
      method: "get",
      url: `https://api.github.com/users/${
        this.props.navigation.state.params.data.login
      }`,
      headers: {
        Authorization: "token a49e16d6187a9904b1511f340bc4bb7f8521b477"
      }
    })
      .then(result => {
        console.log("ini result detail", result);
        this.setState({
          userDetail: result.data,
          isLoading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  formatNull = data => {
    if (data == null) {
      return "-";
    } else {
      return data;
    }
  };

  componentDidMount = () => {
    this.user();
    console.log(this.props);
  };

  render() {
    let data = this.state.userDetail;
    return (
      <Fragment>
        <ScrollView>
          <Content>
            <Card style={{ flex: 1, paddingBottom: 28 }}>
            { this.state.isLoading ? <Spinner color='blue'/> : (
              <Image
                source={{
                  uri: `${data.avatar_url}`
                }}
                style={{
                  height: 200,
                  width: 355,
                  resizeMode: "contain",
                  alignContent: "center",
                  justifyContent: "center",
                  marginTop: 10
                }} 
              />
            )}
              <CardItem>
                <Left>
                  <Body>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 20,
                        marginBottom: 10
                      }}
                    >
                      {data.login}
                    </Text>
                    <Text note>Name: {this.formatNull(data.name)}</Text>
                    <Text note>Company: {this.formatNull(data.company)}</Text>
                    <Text note>Blog: {this.formatNull(data.blog)}</Text>
                    <Text note>Location: {this.formatNull(data.location)}</Text>
                    <Text note>Email: {this.formatNull(data.email)}</Text>
                    <Text note>Bio: {this.formatNull(data.bio)}</Text>
                    <Text note>
                      Join Date:{" "}
                      {moment(this.formatNull(data.created_at)).format("LLL")}
                    </Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
          </Content>
        </ScrollView>
      </Fragment>
    );
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Details"
    };
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  columnLeft: {
    marginTop: 20,
    flexDirection: "column",
    maxWidth: "60%"
  },
  columnRight: {
    flexDirection: "column",
    minWidth: "40%",
    alignItems: "center"
  }
});

export default Detail;

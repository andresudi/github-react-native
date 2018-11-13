import React, { Component, Fragment } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Header,
  Content,
  Card as CardNativeBase,
  CardItem,
  Thumbnail,
  Text as TextNativeBase,
  Button as ButtonNativeBase,
  Left,
  Body,
  Right,
  H3
} from "native-base";

export class RepoCard extends Component {
  render() {
    return (
      <Fragment>
        <CardNativeBase>
          <CardItem>
            <Left>
              <Thumbnail
                source={require("../icons/github.png")}
                
              />
              <Body>
                <Text style={{ fontWeight: "bold" }}>
                  {this.props.data.name}
                </Text>
                <Text note>{this.props.data.full_name}</Text>
              </Body>
            </Left>
          </CardItem>
        </CardNativeBase>
      </Fragment>
    );
  }
}

export default RepoCard;

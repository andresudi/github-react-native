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

export class Card extends Component {
  todoType = type => {
    if (type.completed == true) {
      return true;
    } else {
      return false;
    }
  };

  goToStack = id => {
    this.props.navigation.navigate("Detail", { data: this.props.data });
  };

  render() {
    return (
      <Fragment>
        <TouchableOpacity onPress={this.goToStack}>
          <CardNativeBase>
            <CardItem>
            <Left>
                <Thumbnail source={{uri: `${this.props.data.avatar_url}`}} />
                <Body>
                  <Text style={{fontWeight: 'bold'}}>{this.props.data.login}</Text>
                  <Text note>{this.props.data.url}</Text>
                </Body>
              </Left>
              <Right>
                  <Image
                    source={require("../icons/arrow.png")}
                    style={{ width: 20, height: 20 }}
                  />
              </Right>
            </CardItem>
          </CardNativeBase>
        </TouchableOpacity>
      </Fragment>
    );
  }
}

export default Card;

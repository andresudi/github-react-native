import React, { Component, Fragment } from "react";
import { View, Image, Alert, ScrollView, FlatList } from "react-native";
import {
  Icon,
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Spinner,
  Header
} from "native-base";
import axios from "axios";
import { getUsers } from "../store/action/indexAction";
import isToken from "../store/reducer/isToken";
import SearchCard from "../components/SearchCard";

export class Search extends Component {
  state = {
    searchUsers: [],
    inputUsers: "",
    show: false
  };

  search = () => {
    axios({
      method: "get",
      url: `https://api.github.com/search/users?q=${this.state.inputUsers}`,
      headers: {
        Authorization: isToken
      }
    })
      .then(result => {
        console.log("ini search result", result.data.items);
        this.setState({
          searchUsers: result.data.items,
          show: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount = () => {
    this.search();
  };

  render() {
    return (
      <Fragment>
        <Container>
          <Content>
            <Item rounded style={{ marginTop: 10 }}>
              <Input
                onChangeText={inputUsers => this.setState({ inputUsers })}
                placeholder="Search User's Github here.."
              />
            </Item>
            <Container
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 10
              }}
            >
              <Button
                rounded
                info
                style={{ marginRight: 20 }}
                onPress={() => this.search()}
              >
                <Text>Search</Text>
              </Button> 
            </Container>
          </Content>
          {this.state.show && <SearchCard data={this.state.searchUsers} navigation={this.props.navigation}/>}
        </Container>
      </Fragment>
    );
  }
}

export default Search;

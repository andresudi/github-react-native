import React, { Component } from "react";
import { View, Image, Alert } from "react-native";
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
  Spinner
} from "native-base";
import { connect } from "react-redux";
import axios from "axios";
import { getTodo } from "../store/action/todoAction";

export class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  state = {
    userId: "",
    title: "",
    completed: false
  };

  addTodo = () => {
    console.log("kepencet");
    if (this.state.userId === "" || this.state.title === "") {
      alert("all data must be filled");
    } else {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          userId: this.state.userId,
          title: this.state.title
        })
        .then(() => {
          console.log("success add todo");
          alert("success add new todo");
          //   Alert.alert("Info", `Successfully add todo`, [
          //     {
          //       text: "OK",
          //       onPress: () => {
          //         this.props.getTodo();
          //         // this.props.navigation.state.params.navigate("Home");
          //       }
          //     }
          //   ]);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>User Name / User Id</Label>
              <Input onChangeText={userId => this.setState({ userId })} />
            </Item>
            <Item floatingLabel last>
              <Label>Task</Label>
              <Input onChangeText={title => this.setState({ title })} />
            </Item>
          </Form>

          <Container
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 25
            }}
          >
            <Button
              primary
              style={{ marginRight: 20 }}
              onPress={() => this.addTodo()}
            >
              <Text> Add Task</Text>
            </Button>
          </Container>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTodo: () => dispatch(getTodo())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Add);

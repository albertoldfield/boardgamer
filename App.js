import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
  ListItem,
  List,
  Thumbnail
} from "native-base";
import axios from "axios";
import { Parser } from "react-native-xml2js";

export default class App extends React.Component {
  state = { boardgames: [] };

  componentWillMount() {
    axios
      .get("https://www.boardgamegeek.com/xmlapi/boardgame/2536?")
      .then(response => {
        var parser = new Parser();
        parser.parseString(response.data, (error, result) => {
          console.log(result.boardgames.boardgame[0]);
          this.setState({ boardgames: result.boardgames.boardgame });
        });
      });
  }

  renderBoardgames() {
    return this.state.boardgames.map(boardgame => (
      <ListItem key={boardgame.$.objectid}>
        <Thumbnail square size={80} source={{ uri: boardgame.thumbnail }} />
        <Body>
          <Text>{boardgame.name}</Text>
          <Text note>{boardgame.boardgamehonor}</Text>
        </Body>
      </ListItem>
    ));
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>BoardGamer</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content>
          <List>{this.renderBoardgames()}</List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

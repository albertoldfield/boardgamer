import React, { Component } from "react";
import Expo from "expo";
import HomeScreen from "./app/scenes/Home/index.js";
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
  Card,
  CardItem,
  List,
  Thumbnail
} from "native-base";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf"),
      FontAwesome: require("native-base/Fonts/FontAwesome.ttf")
    });
/*
    axios
      .get(
        "https://bgg-json.azurewebsites.net/collection/oldfielda?grouped=true"
      )
      .then(response => {
        this.setState({ boardgames: response.data });
      });
*/
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <HomeScreen />;
  }
}

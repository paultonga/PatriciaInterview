import React from "react";
import Navigator from "./src/navigation/Navigator";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import * as Facebook from 'expo-facebook';
import { FB_APP_ID } from "./src/utils/constants";



export default class App extends React.Component {
  async componentDidMount() {
    try {
      await Facebook.initializeAsync(FB_APP_ID);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

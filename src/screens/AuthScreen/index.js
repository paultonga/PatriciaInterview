import React, { Component } from "react";
import {connect} from 'react-redux';
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import { facebookSignIn, googleSignIn, clearError } from '../../redux/actions';
import ModalView from "../../components/ModalView";

class AuthScreen extends Component {
  signInWithGoogle = () => {
      this.props.googleSignIn();
  };

  signInWithFacebook = () => {
      this.props.facebookSignIn();
  };

  signInWithEmail = () => {
    this.props.navigation.navigate("SignUpScreen");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>{"Welcome"}</Text>
          <Text style={styles.subtext}>
            {"Sign into the app using your preferred authentication provider."}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            text="Continue with Facebook"
            icon="facebook"
            onPress={this.signInWithFacebook}
            backgroundColor="#4267B2"
            color="#FFF"
          />

          <Button
            text="Continue with Google"
            icon="google"
            onPress={this.signInWithGoogle}
            backgroundColor="#db3236"
            color="#fff"
          />

          <Button
            text="Continue with Email"
            icon="email"
            onPress={this.signInWithEmail}
            backgroundColor="#fff"
            color=""
          />
        </View>
        <ModalView onClose={()=> this.props.clearError()} error={this.props.error} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
    error: state.app.error,
  });

const mapDispatchToProps = dispatch => ({
    facebookSignIn: () => dispatch(facebookSignIn()),
    googleSignIn: () => dispatch(googleSignIn()),
    clearError: () => dispatch(clearError()),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
 

import React, { Component } from "react";
import {connect} from 'react-redux';
import { View, Text } from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { emailSignUp, clearError } from '../../redux/actions';
import ModalView from "../../components/ModalView";

class SignUpScreen extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  goBack = () => {
    this.props.navigation.goBack();
  };

  gotoSignIn = () => {
    this.props.navigation.navigate("SignInScreen");
  };

  signUp = () => {
      const { email, password, name } = this.state;
      this.props.emailSignUp({email, password, name});
  }

  render() {
    const { email, password, name } = this.state;
    return (
      <View style={styles.container}>
        <Icon
          name="arrow-left"
          onPress={this.goBack}
          size={25}
          style={styles.backButton}
        />
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Register</Text>
          <Text style={styles.subtext}>
            Enter your full name, email address and password to create an
            account.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Input
            placeholder="Enter your name"
            label="Your name"
            value={name}
            onChangeText={(name) => this.setState({ name })}
          />

          <Input
            placeholder="Enter your email"
            label="Email Address"
            value={email}
            onChangeText={(email) => this.setState({ email })}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Input
            placeholder="Enter your password"
            label="Password"
            value={password}
            onChangeText={(password) => this.setState({ password })}
            isSecured
          />

          <Button
            text="Create Account"
            onPress={this.signUp}
            backgroundColor="#3cba54"
            color="#fff"
          />
        </View>
        <View style={styles.notice}>
          <Text style={styles.noticeText}>
            Already have an account?{" "}
            <Text onPress={this.gotoSignIn} style={styles.textButton}>
              Sign In
            </Text>
          </Text>
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
    emailSignUp: payload => dispatch(emailSignUp(payload)),
    clearError: () => dispatch(clearError()),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
  
import React, { Component } from "react";
import {connect} from 'react-redux';
import { View, Text } from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { emailSignIn, clearError } from '../../redux/actions';
import ModalView from "../../components/ModalView";

class SignInScreen extends Component {
  state = {
    email: "",
    password: "",
  };
  goBack = () => {
    this.props.navigation.goBack();
  };

  signIn = () => {
    const { email, password } = this.state;
    if (!email || !password) {
      return;
    }
    this.props.emailSignIn({ email, password });
  };

  render() {
    const { email, password } = this.state;
    const { loading, error } = this.props;
    return (
      <View style={styles.container}>
        <Icon
          name="arrow-left"
          onPress={this.goBack}
          size={25}
          style={styles.backButton}
        />
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Login</Text>
          <Text style={styles.subtext}>
            Enter your email address and password to login to your account.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
        
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
            text="Logint"
            onPress={this.signIn}
            backgroundColor="#3cba54"
            color="#fff"
          />
        </View>
      <ModalView onClose={()=> this.props.clearError()} error={error} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  error: state.app.error,
  loading: state.app.loading,
});

const mapDispatchToProps = dispatch => ({
  emailSignIn: payload => dispatch(emailSignIn(payload)),
  clearError: () => dispatch(clearError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);

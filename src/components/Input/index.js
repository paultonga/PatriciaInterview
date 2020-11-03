import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles";

class Input extends Component {
  state = {
    isFocused: false,
  };

  render() {
    const { placeholder, value, onChangeText, label, isSecured, keyboardType, autoCapitalize } = this.props;
    const { isFocused } = this.state;

    return (
      <View style={styles.wrapper}>
        {(isFocused || value.length > 0) && (
          <Text style={styles.placeholder}>{label}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isSecured}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
        />
      </View>
    );
  }
}

export default Input;

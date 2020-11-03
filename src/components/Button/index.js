import React, { PureComponent } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

class Button extends PureComponent {
    
  render() {
    const { icon, text, onPress, color, backgroundColor } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.65}
        style={[styles.wrapper, { backgroundColor, borderColor: color }]}
        onPress={onPress}
      >
        {icon && <Icon name={icon} size={23} color={color} />}
        <Text style={[styles.text, { color }]}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;

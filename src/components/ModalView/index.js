import React, { Component } from "react";
import {connect} from 'react-redux';
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";

export class ModalView extends Component {
  render() {
    const { onClose, error } = this.props;
    const isVisible =  error !== null;
    return (
      <Modal animated  visible={isVisible}>
        <View style={styles.container}>
          {error && (
            <View style={styles.errorContainer}>
              <Text style={styles.error}>
               {error}
              </Text>
              <TouchableOpacity onPress={onClose}  style={styles.closeButton}>
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>
    );
  }
}


  export default ModalView;


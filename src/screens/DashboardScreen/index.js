import React, { Component } from "react";
import {connect} from 'react-redux';
import { View, Text } from "react-native";
import styles from './styles';
import Button from "../../components/Button";
import { signOut } from '../../redux/actions';

class DashboardScreen extends Component {
  signOut = async () => {
    await this.props.navigation.reset({
      routes: [{name: 'Auth'}],
    });
    this.props.signOut();
  };

  render() {
    const { user } = this.props;

    return ( 
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{user.name || "Your name"}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
      <View style={styles.bottom}>
      <Button
            text="Sign Out"
            icon="logout"
            onPress={this.signOut}
            backgroundColor="#4c8bf5"
            color="#fff"
          />
      </View>
      
    </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.app.user,
});
const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
});
export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);


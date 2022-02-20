import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../../state/Actions/Authentication';

const mapDispatchToProps = {
  login,
};

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          Login Screen
        </Text>
        <Button
          onPress={() => this.props.login()}
          title="Login"
          color="#841584"
        />
      </View>
    );
  }
};

export default connect(null, mapDispatchToProps)(Login);

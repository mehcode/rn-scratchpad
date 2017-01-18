/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  WebView,
  View, 
} from 'react-native';

export default class scratch_rn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          javaScriptEnabled={true}
          style={styles.webview}
          source={{html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/DTn2ZZMU2Zc" frameborder="0" allowfullscreen></iframe>`}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  webview: {
    flex: 1,
  },
});

AppRegistry.registerComponent('scratch_rn', () => scratch_rn);

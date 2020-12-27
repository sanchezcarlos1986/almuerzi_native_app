import React from 'react';
import {ActivityIndicator, StyleSheet, View, Dimensions} from 'react-native';

const ListItem = ({size = 'large', color = '#0000ff'}) => (
  <View style={styles.container}>
    <ActivityIndicator size={size} color={color} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,
  },
});

export default ListItem;

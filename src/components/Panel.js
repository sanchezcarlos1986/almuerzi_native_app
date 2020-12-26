import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

export default function Panel({
  onPressLeft,
  onPressRight,
  leftText,
  rightText,
}) {
  return (
    <View style={styles.panel}>
      <Button title={leftText} onPress={onPressLeft} />
      <Button title={rightText} onPress={onPressRight} />
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

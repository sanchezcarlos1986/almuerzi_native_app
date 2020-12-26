import React from 'react';
import {Modal, StyleSheet, View, Dimensions} from 'react-native';

export default function ({
  animationType = 'slide',
  transparent = true,
  visible = false,
  children = null,
}) {
  return (
    <Modal
      animationType={animationType}
      transparent={transparent}
      visible={visible}>
      <View style={styles.center}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  modalView: {
    backgroundColor: 'white',
    minWidth: Dimensions.get('window').width - 100,
    borderRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});

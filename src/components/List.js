import React, {Fragment} from 'react';
import {
  Dimensions,
  StyleSheet,
  FlatList,
  View,
  Text,
  Button,
} from 'react-native';

export default function ({locations, closeModal}) {
  return (
    <Fragment>
      <View style={styles.list}>
        <FlatList
          data={locations.map(({name}) => name)}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={item => item}
        />
      </View>
      <View style={styles.button}>
        <Button title="Close" onPress={closeModal} />
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  list: {
    height: Dimensions.get('window').height - 250,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    padding: 15,
  },
  button: {
    padding: 10,
    backgroundColor: '#eee',
  },
});

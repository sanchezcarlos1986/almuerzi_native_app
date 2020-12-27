import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useFetch} from '~/hooks';
import {API_URL} from '~/constants';
import {Loader} from '~/components';

const Modal = ({navigation}) => {
  const id = navigation.getParam('_id');
  const {loading, data} = useFetch(`${API_URL.MEALS}/${id}`);

  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Text>{data._id}</Text>
          <Text>{data.name}</Text>
          <Text>{data.desc}</Text>
          <Button title="Accept" onPress={() => {}} />
          <Button title="Cancel" onPress={() => navigation.navigate('Meals')} />
        </View>
      )}
    </View>
  );
};

Modal.navigationOptions = {
  title: 'Comidas disponibles',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Modal;
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useFetch} from '~/hooks';
import {API_URL} from '~/constants';
import {Loader} from '~/components';

const Modal = ({navigation}) => {
  const id = navigation.getParam('_id');
  const {loading, data} = useFetch(`${API_URL.MEALS}/${id}`);

  const postOrder = async () => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      fetch(API_URL.ORDERS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: token,
        },
        body: JSON.stringify({
          meal_id: id,
        }),
      })
        .then(res => {
          if (res.status !== 201) {
            return alert('La orden no pudo ser generada');
          }

          alert('Ordern fue generada con exito');
          navigation.navigate('Meals');
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Text>{data._id}</Text>
          <Text>{data.name}</Text>
          <Text>{data.desc}</Text>
          <Button title="Accept" onPress={postOrder} />
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

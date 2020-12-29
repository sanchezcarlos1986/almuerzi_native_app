import React from 'react';
import {View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useForm} from '~/hooks';

const Login = ({navigation}) => {
  const initialState = {email: '', password: ''};

  const onSubmit = values => {
    fetch('http://serverless-rust-ten.vercel.app/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(x => x.text())
      .then(x => {
        try {
          return JSON.parse(x);
        } catch {
          throw x;
        }
      })
      .then(({token}) => {
        AsyncStorage.setItem('token', token);
        navigation.navigate('Meals');
      })
      .catch(err => Alert.alert('Error al iniciar sesión', err));
  };

  const {subscribe, inputs, handleSubmit} = useForm(initialState, onSubmit);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        autoCapitalize="none"
        value={inputs.email}
        style={styles.input}
        placeholder="Email"
        onChangeText={subscribe('email')}
      />
      <TextInput
        autoCapitalize="none"
        value={inputs.password}
        style={styles.input}
        placeholder="Password"
        onChangeText={subscribe('password')}
        secureTextEntry
      />
      <Button title="Iniciar Sesión" onPress={handleSubmit} />
      <Button
        title="Registrarse"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

Login.navigationOptions = {
  title: 'Ingreso',
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  input: {
    alignSelf: 'stretch',
    borderColor: '#ccc',
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    marginBottom: 10,
    padding: 5,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default Login;

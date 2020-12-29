import React from 'react';
import {View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';
import {useForm} from '~/hooks';

const Register = ({navigation}) => {
  const initialState = {email: '', password: ''};

  const onSubmit = values => {
    fetch('http://serverless-rust-ten.vercel.app/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(x => x.text())
      .then(x => {
        if (x === 'usuario creado con éxito') {
          return Alert.alert('Éxito', x, [
            {
              text: 'Ir al inicio',
              onPress: () => navigation.navigate('Login'),
            },
          ]);
        }

        Alert.alert('Error', x);
      })
      .catch(err => console.log('Error al registrarse', err));
  };

  const {subscribe, inputs, handleSubmit} = useForm(initialState, onSubmit);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
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
      <Button title="Registrarse" onPress={handleSubmit} />
      <Button
        title="Iniciar Sesión"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

Register.navigationOptions = {
  title: 'Registro',
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

export default Register;

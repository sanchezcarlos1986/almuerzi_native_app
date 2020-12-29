import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Loader} from '~/components';

const AuthLoading = ({navigation}) => {
  const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    navigation.navigate(token ? 'Root' : 'OnBoarding');
  };
  useEffect(() => {
    getToken();
  }, []);

  return (
    <View style={styles.container}>
      <Loader />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default AuthLoading;

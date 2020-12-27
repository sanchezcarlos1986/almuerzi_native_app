import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {ListItem} from '~/components';
import {useFetch} from '~/hooks';
import {API_URL} from '~/constants';
import {Loader} from '~/components';

const Meals = ({navigation}) => {
  const {loading, data} = useFetch(API_URL.MEALS);

  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          style={styles.list}
          data={data}
          renderItem={({item}) => (
            <ListItem
              onPress={() => navigation.navigate('Modal', {_id: item._id})}
              name={item.name}
            />
          )}
          keyExtractor={item => item._id}
        />
      )}
    </View>
  );
};

Meals.navigationOptions = {
  title: 'Comidas disponibles',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  list: {
    alignSelf: 'stretch',
  },
});

export default Meals;

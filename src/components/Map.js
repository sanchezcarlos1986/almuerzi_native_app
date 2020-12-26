import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default function Map({onLongPress, locations, locationsFilter}) {
  React.useEffect(() => {
    console.log('Map locations ===>:', locations);
  }, [locations]);

  return (
    <MapView onLongPress={onLongPress} style={styles.map}>
      {Array.isArray(locations) && locationsFilter
        ? locations.map(({coordinate, name}) => (
            <Marker key={name} coordinate={coordinate} title={name} />
          ))
        : null}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('window').height - 150,
    width: Dimensions.get('window').width,
  },
});

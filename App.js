import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {Map, Modal, Panel, Input, List} from '~/components';

export default function App() {
  const [locations, setLocations] = useState([]);
  const [tempLocation, setTempLocation] = useState({});
  const [locationName, setLocationName] = useState('');
  const [visibilityFilter, setVisibilityFilter] = useState('new_location');
  const [visibility, setVisibility] = useState(false);
  const [locationsFilter, setLocationsFilter] = useState(true);

  const handleLongPress = ({nativeEvent: {coordinate}}) => {
    setVisibilityFilter('new_location');
    setTempLocation(coordinate);
    setVisibility(true);
  };

  const handleLocation = () => {
    setLocations([
      ...locations,
      {name: locationName, coordinate: tempLocation},
    ]);
    setVisibility(false);
  };

  const resetModal = () => {
    setLocationName('');
    setTempLocation({});
    setVisibility(false);
  };

  const handleList = () => {
    setVisibility(true);
    setVisibilityFilter('all_locations');
  };

  const toggleLocationsFilter = () => setLocationsFilter(!locationsFilter);

  return (
    <View style={styles.container}>
      <Map
        onLongPress={handleLongPress}
        locations={locations}
        locationsFilter={locationsFilter}
      />
      <Modal visible={visibility}>
        {visibilityFilter === 'new_location' ? (
          <View style={styles.form}>
            <Text>😎😎😎😎</Text>
            <Input
              title="Name"
              placeholder="Quilicura"
              onChangeText={setLocationName}
            />
            <Button title="Accept" onPress={handleLocation} />
            <Button title="Cancel" onPress={resetModal} />
          </View>
        ) : (
          <List locations={locations} closeModal={resetModal} />
        )}
      </Modal>
      <Panel
        onPressLeft={handleList}
        onPressRight={toggleLocationsFilter}
        leftText="Lista"
        rightText="Mostrar / Ocultar"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    padding: 15,
  },
});

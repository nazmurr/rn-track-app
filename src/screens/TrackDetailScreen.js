import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');

  const track = state.find(t => t._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
      <Text h4 style={styles.heading}>{track.name}</Text>
    </>
  );
};

TrackDetailScreen.navigationOptions = {
  title: "Track Detail",
};

const styles = StyleSheet.create({
  map: {
    height: 300
  },
  heading: {
    textAlign: 'center',
    marginVertical: 10
  }
});

export default TrackDetailScreen;

import { useCallback, useLayoutEffect, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Map({navigation}) {

  const [selectedLocation, setSelectedLocation] = useState();
  
  const region = {
    latitude: 26.2939335,
    longitude: 73.0881563,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function setLocationHandler(event){
    let lat = event.nativeEvent.coordinate.latitude;
    let lng = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({
        lat: lat,
        lng: lng
    });
  }


  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        'No location picked!',
        'You have to pick a location (by tapping on the map) first!'
      );
      return;
    }

    navigation.navigate('Add Place', {
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng,
    });
  }, [navigation, selectedLocation]);


  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <Button
         title='save'
        //   size={24}
        //   color={tintColor}
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation, savePickedLocationHandler]);



  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={region} onPress={setLocationHandler}>
      {selectedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
        </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

import {
  View,
  TouchableOpacity,
  Alert,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Colors } from "../constants/Colors";

import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { useNavigation, useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import MyButton from "../UI/MyButton";

export default function LocationPicker({onChangeLocation}) {
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  const navigation = useNavigation();
  const route = useRoute();
  const [coordinates, setCoordinates] = useState();

  useEffect(() => {
    if (route.params?.pickedLat) {
      setCoordinates({
        latitude: route.params.pickedLat,
        longitude: route.params.pickedLng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  }, [route]);

  useEffect(()=>{onChangeLocation(coordinates)},[coordinates]);

  // console.log("Route in Add Place: ", route);
  //  = {
  //   latitude: 16.2939335,
  //   longitude: 63.0881563,
  //   latitudeDelta: 0.0922,
  //   longitudeDelta: 0.0421,
  // }

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant location permissions to use this app."
      );
      return false;
    }

    return true;
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    // console.log(location);
    setCoordinates({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  }

  function pickOnMapHandler() {
    navigation.navigate("Map");
  }

  let mapPreview = <Text style={{color:'white'}}>No Location set yet!</Text>;

  if (coordinates) {
    mapPreview = (
      <MapView style={styles.map} region={coordinates}>
        <Marker
          title='Picked Location'
          coordinate={{
            latitude: coordinates?.latitude,
            longitude: coordinates?.longitude,
          }}
        />
      </MapView>
    );
  }

  return (
    <View>
      <View style={styles.container}>{mapPreview}</View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        
      <MyButton icon='location' onPress={getLocationHandler}>Locate Me</MyButton>
      <MyButton icon='map' onPress={pickOnMapHandler}>Pick on map</MyButton>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'white',
    height: 200,
    width: "100%",
    // marginVertical: 10,
    borderRadius:4,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

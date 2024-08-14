import { View, TouchableOpacity, Alert, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Colors } from "../constants/Colors";

import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location';
import { useNavigation } from "@react-navigation/native";

export default function LocationPicker() {
  const [locationPermissionInformation, requestPermission] =
  useForegroundPermissions();

  const navigation = useNavigation();

async function verifyPermissions() {
  if (
    locationPermissionInformation.status === PermissionStatus.UNDETERMINED
  ) {
    const permissionResponse = await requestPermission();

    return permissionResponse.granted;
  }

  if (locationPermissionInformation.status === PermissionStatus.DENIED) {
    Alert.alert(
      'Insufficient Permissions!',
      'You need to grant location permissions to use this app.'
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
  console.log(location);
}



    function pickOnMapHandler(){
      navigation.navigate('Map');
    }




  return (
    <View>
      <View></View>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: Colors.primary500,
            marginTop: 10,
            padding:8
          }}
          onPress={getLocationHandler}>
          <Ionicons name='location' size={30} color={Colors.primary500} />
          <Text
            style={{ color: Colors.primary500, fontSize: 20, marginLeft: 8 }}>
            Locate Me
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: Colors.primary500,
            marginTop: 10,
            padding:8
          }}
          onPress={pickOnMapHandler}>
          <Ionicons name='map' size={30} color={Colors.primary500} />
          <Text
            style={{ color: Colors.primary500, fontSize: 20, marginLeft: 8 }}>
            Pick on map
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

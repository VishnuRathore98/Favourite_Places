import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import ImagePicker from "../ImagePicker";
import LocationPicker from "../LocationPicker";
import MyButton from "../../UI/MyButton";

export default function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [pickedLocation, setPickedLocation] = useState();

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  function selectImageHandler(selectedImage) {
    setSelectedImage(selectedImage);
  }

  function pickLocationHandler(pickedLocation) {
    setPickedLocation(pickedLocation);
  }

  function addPlaceHandler(){
    console.log("Title: ",enteredTitle);
    console.log("Image: ",selectedImage);
    console.log("Location: ",pickedLocation);

  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>

      <ImagePicker onChangeImage={selectImageHandler}/>
      <LocationPicker onChangeLocation={pickLocationHandler}/>
      <MyButton icon='bookmark' onPress={addPlaceHandler} >Add Place</MyButton>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});

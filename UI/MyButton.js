import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

// must name the text for <Text>text</Text> as children. 
export default function MyButton({ onPress, icon, children }) {
  return (
    <TouchableOpacity style={styles.touchableOpacityStyle} onPress={onPress}>
      <Ionicons name={icon} size={30} color={Colors.primary500} />
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.primary500,
    padding:8,
    borderRadius:4,
    marginVertical:8,
  },
  textStyle: {
    color: Colors.primary500,
    fontSize: 20,
    marginLeft: 8,
  },
});

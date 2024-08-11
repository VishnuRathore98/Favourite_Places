import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AnimatedPulseCircle from "./screens/AnimatedPulseCircle";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <View>
      <AnimatedPulseCircle/>
      <Text>Told you I'll do it!😎</Text>
      </View> */}
      <Text>It was the best of the 🥇 </Text>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

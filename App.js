import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AnimatedPulseCircle from "./screens/AnimatedPulseCircle";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AddPlace from "./screens/AddPlace";
import AllPlaces from "./screens/AllPlaces";
import IconButton from "./UI/IconButton";
import { Colors } from "./constants/Colors";
import Map from "./screens/Map";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <View>
    //   <AnimatedPulseCircle/>
    //   <Text>Told you I'll do it!😎</Text>
    //   </View>
    //   <Text>It was the best of the 🥇 </Text>
    //   <StatusBar style='auto' />
    // </View>

    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}>
          <Stack.Screen
            name='All Places'
            component={AllPlaces}
            options={({ navigation }) => ({
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon={"add"}
                  size={24}
                  color={tintColor}
                  onPress={() => {
                    navigation.navigate("Add Place");
                  }}
                />
              ),
            })}
          />
          <Stack.Screen name='Add Place' component={AddPlace} />
          <Stack.Screen name='Map' component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
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

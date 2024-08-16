import { FlatList, StyleSheet, View, Text } from "react-native";
import PlaceItem from "./PlaceItem";
import { Colors } from "../../constants/Colors";

export default function PlaceList({ places }) {
  if (!places || places.length === 0 ) {
    return(
      <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>
                    No places added yet - start adding some!
                </Text>
            </View>
        );
      }
      console.log("In PlaceList: ",places);
  return (
    <View>
      <FlatList
      style={styles.list}
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PlaceItem place={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackContainer:{
    flex:1, 
    justifyContent:'center',
    alignItems:'center',
  },
  fallbackText:{
    fontSize:16,
    color: Colors.primary200,
  },
  list:{
    margin:24
  }
});

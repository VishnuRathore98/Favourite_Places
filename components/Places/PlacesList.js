import { FlatList, StyleSheet, View } from "react-native";
import PlaceItem from "./PlaceItem";

export default function PlaceList({ places }) {
    if (!places || places.length === 0) {
        return(
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>
                    No places added yet - start adding some!
                </Text>
            </View>
        );
    }
  return (
    <View>
      <FlatList
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
    fontSize:16
  }
});

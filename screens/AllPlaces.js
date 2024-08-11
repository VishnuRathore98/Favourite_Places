import { StyleSheet, View } from "react-native";
import PlacesList from '../components/Places/PlacesList';

export default function AllPlaces(){
    return(
        <PlacesList />
    );
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});
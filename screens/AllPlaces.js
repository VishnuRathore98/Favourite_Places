import { StyleSheet, View } from "react-native";
import PlacesList from '../components/Places/PlacesList';
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

export default function AllPlaces({navigation, route}){
    const [loadedPlaces, setLoadedPlaces] = useState([]);
    // const isFocused = useIsFocused();

    useEffect(()=>{
        if (route.params) {
            setLoadedPlaces((currentPlaces)=>[...currentPlaces, route.params]);
        }
    },[route])

    return(
        <PlacesList places={loadedPlaces}/>
    );
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});
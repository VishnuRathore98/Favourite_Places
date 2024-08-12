import { StyleSheet, View, Text } from "react-native";
import  PlaceForm  from "../components/Places/PlaceForm";

export default function AddPlace(){
    return(
        <PlaceForm />
    );
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});
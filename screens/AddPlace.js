import { StyleSheet } from "react-native";
import  PlaceForm  from "../components/Places/PlaceForm";

export default function AddPlace({navigation}){
    
    function addPlaceHandler(place){
        // console.log(place);
        navigation.navigate('All Places', place);
    }

    return(
        <PlaceForm onChange={addPlaceHandler}/>
    );
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});
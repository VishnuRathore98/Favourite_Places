import {View, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { launchCameraAsync } from 'expo-image-picker';


export default function ImagePicker(){

    async function takeImageHandler(){
        const image = await launchCameraAsync({
            allowsEditing:true,
            aspect:[16,9],
            quality:0.5
        });
        console.log(image);
    }

    return(
        <View>
        <TouchableOpacity onPress={takeImageHandler}>
            <Ionicons name="camera-outline" size={350} color='white'/>
        </TouchableOpacity>
        </View>
    );
}


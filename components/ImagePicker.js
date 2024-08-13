import {View, TouchableOpacity, Alert, Text, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { useState } from 'react';
import { Colors } from '../constants/Colors';


export default function ImagePicker(){

    // The following code is for managing camera permissions in IOS devices.
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();
    const [pickedImage, setPickedImage] = useState();

    async function verifyPermission(){
        if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            return permissionResponse;
        }

        if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert('Permission Required!','To access the app features we need your permission to access the camera.');
            return false;
        }

        return true;
    }

    async function takeImageHandler(){
        
        const hasPermission = await verifyPermission();

        if(!hasPermission){
            return;
        }
        
        const image = await launchCameraAsync({
            allowsEditing:true,
            aspect:[16,9],
            quality:0.5
        });
        console.log(image.assets[0].uri);
        setPickedImage(image.assets[0].uri);
    }

    let imagePreview = <Text>No image taken yet!</Text>;

    if (pickedImage) {
        imagePreview = <Image style={{height:200, width:'100%'}} source={{uri:pickedImage}} />
    }

    return(
        <View>
            <View>
                {imagePreview}
            </View>
        <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', borderWidth:1, borderColor:Colors.primary500, marginTop:10}} onPress={takeImageHandler}>
            <Ionicons name="camera-outline" size={30} color={Colors.primary500}/>
            <Text style={{color:Colors.primary500, fontSize:20, marginLeft:8}} >Take a picture</Text>
        </TouchableOpacity>
        </View>
    );
}


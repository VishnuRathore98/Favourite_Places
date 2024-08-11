import { TextInput } from "react-native";

class Place{
    constructor(title, imageUri, address, location){
        this.title = title;
        this.imageUri = imageUri;
        this.address = address;
        this.location = location;
        this.id = new Date().toString() + new Math.random().toString();
    }
}
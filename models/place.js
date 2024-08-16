
export class Place{
    constructor(title, imageUri, location){
        this.title = title;
        this.imageUri = imageUri;
        // this.address = address;
        this.location = {lat:location.latitude, lng:location.longitude};
        this.id = new Date().toString() + Math.random().toString();
    }
}
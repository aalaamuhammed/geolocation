import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE,Marker,Polyline } from 'react-native-maps';
import { Text, View,StyleSheet,Image } from 'react-native';
import Geolocation from 'react-native-geolocation-service';





export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers:[
        {coord:{
          latitude:37.78825,
          longitude: -122.4324
        },
          title: 'Foo Place',
          subtitle: '1234 Foo Drive',
          key:1
        },
        {coord:{
          latitude:37.788256,
          longitude: -122.4330
        },
          title: 'Foo Place',
          subtitle: '1234 Foo Drive',
          key:2
        },
        {coord:{
          latitude:37.788257,
          longitude: -122.4334},
          title: 'Foo Place',
          subtitle: '1234 Foo Drive',
          key:3
        },
      ]
    }
  }
  componentDidMount() {
    // Instead of navigator.geolocation, just use Geolocation.
    if (hasLocationPermission) {
        Geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }
}
  
  
  
  render() {
    return (
      <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} 
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     
     {this.state.markers.map( marker=> (
        <Marker 
        coordinate={marker.coord} />))}
        <Polyline
		coordinates={[
			{  latitude:37.78825,
        longitude: -122.4324 },
			{ latitude:37.788256,
        longitude: -122.4330 },
			{ latitude:37.788257,
        longitude: -122.4334 }
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={6}
	/>
      
     </MapView>
   </View>
    );
  } 
}
const styles = StyleSheet.create({
  container: {
  flex: 1
  },
  map: {
    flex: 1
  },
 });

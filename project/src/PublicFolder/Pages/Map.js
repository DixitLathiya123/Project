import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


function Maps(props) {
    const mapStyles = {
        width: '80%',
        height: '85%',
    };
    
    return (
        <div>
            <Map
                google={props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
            >
                <Marker position={{ lat: 21.23, lng: 72.90 }} />
            </Map>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBe6do-yJm4xj9leLUZuaVZksHPM6QG2xM'
})(Maps);

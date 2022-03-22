import React, { useEffect, useState } from "react";
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import '../../../../node_modules/leaflet/dist/leaflet'
import '../../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.css';

import './map.css';
import { timeEnd } from "console";
import { timeout } from "workbox-core/_private";

let map: L.Map = L.map(document.createElement('div'));
let marker: L.Marker<any>;

//**************************************** ICONS ****************************************/

const personIcon = new L.Icon({

    iconUrl: 'https://www.freeiconspng.com/thumbs/walking-icon/walking-icon-1.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]

});

const greenIcon = new L.Icon({
    iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-2x-green.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]

});

const blueIcon = new L.Icon({
    iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-2x-blue.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]

});

const redIcon = new L.Icon({
    iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]

});

//****************************************  ****************************************/

interface Waypoints {
    lat: number,
    long: number,
}

let lat: number | null = null;
let long: number | null = null;

function UserLocation() {

    map.locate({
        setView: true,//false
    })

    /*useEffect(() => {
        let view = true;
        
        setInterval(() => {
            try {
                map.locate({
                    setView: view,
                })
                view = false;
            } catch {}

        },5000)
    }, [])*/

    map = useMapEvents({
        locationfound: (location) => {
            lat = location.latlng.lat;
            long = location.latlng.lng;
            Waypoints();
            try {
                marker.removeFrom(map)
                
            } catch {

            } finally {
                marker = L.marker(
                    location.latlng,
                    {
                        icon: personIcon
                    },
                ).addTo(map);

            }

        }

    })
    return null;
}

function Waypoints() {
    console.log("añadir ", lat, long)
    let coord=[
            L.latLng(28.1296, -15.4480),
            L.latLng(28.13409, -15.4404),
            L.latLng(28.1396, -15.4307)
    ]
    if(lat && long){
        console.log("añadir ", lat, long)
        coord.unshift(L.latLng(lat, long));
    }
    console.log(coord)

    L.Routing.control(/*L.extend(window.lrmConfig, */{
        waypoints: coord,
        // router: L.Routing.graphHopper('36587c66-f6a0-4d59-80bf-4fa2ccb9e3b3', {
        //     urlParameters: {
        //         vehicle: 'foot'
        //     }
        // }),
        routeWhileDragging: false,
        showAlternatives: true,
        lineOptions: {
            styles: [
                { color: '#242c81', opacity: 0.8, weight: 3 }
            ],
            extendToWaypoints: false,
            missingRouteTolerance: 0
        },
        altLineOptions: {
            styles: [
                { color: '#ff0000', opacity: 0.5, weight: 3 }
            ],
            extendToWaypoints: false,
            missingRouteTolerance: 0
        },
        //plan: L.Routing


    }).addTo(map);

    return null;

}

// function changeWayToGo(way:String){
//     //https://gis.stackexchange.com/questions/193235/leaflet-routing-machine-how-to-dinamically-change-router-settings
//     control.getRouter().options.urlParameters.vehicle = 'foot';
//     control.route();
// }

const Map: React.FC<Waypoints> = (props: Waypoints) => {

    return (
        <MapContainer id="mapcontainer" center={[props.lat, props.long]} zoom={16}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <UserLocation />
            <Waypoints /> 
        </MapContainer>
    );

}

export default Map;


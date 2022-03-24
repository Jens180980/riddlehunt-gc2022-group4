import React, { useEffect, useState } from "react";
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import '../../../../node_modules/leaflet/dist/leaflet.css'
import '../../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { Route } from '../../../interfaces/Route.interface';
import './map.css';
import { timeEnd } from "console";
import { timeout } from "workbox-core/_private";
import { idCard } from "ionicons/icons";
import RoutesService from "../../../Services/routes.service";

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

const empti = new L.Icon({
    iconUrl: 'https://www.freeiconspng.com/thumbs/walking-icon/walking-icon-1.png',
    iconSize: [0, 0],
    iconAnchor: [0, 0],
    popupAnchor: [0, 0],
    shadowSize: [0, 0]

});

const greenIcon = new L.Icon({
    iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-2x-green.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],

});

const blueIcon = new L.Icon({
    iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-2x-blue.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],

});

const redIcon = new L.Icon({
    iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],

});

//****************************************  ****************************************/

interface Waypoints {
    lat: number,
    long: number,
}



let lat: number | null = null;
let long: number | null = null;

function UserLocation(route: Route) {

    map.locate({
        setView: true,//false
        maxZoom: 16,
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
            Waypoints(route);
            try {
                marker.removeFrom(map)

            } catch {

            } finally {
                marker = L.marker(
                    location.latlng,
                    {
                        icon: personIcon,
                    },
                ).addTo(map);

            }

        }

    })
    return null;
}

function Waypoints(route: Route) {
    let coordWaypoints: Waypoints[] = [];
    let coord = [];

    if (route) {
        route.places.forEach((place) => {
            coord.push(L.latLng(parseFloat(place.latitude), parseFloat(place.longitude)))
        })
    }

    //else{
        //cord.push(L.latLng(54645,654646465)
    //}


    // for(let c = 0; c < ruta.place; c++){
    //     coord.push(L.latLng(ruta.place.latitud, ruta.place.longitud));
    // }

    // 



    if (lat && long) {
        coord.unshift(L.latLng(lat, long));
    }
    // Esto es un easter egg
    L.Routing.control({
        waypoints: coord,
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
        plan: L.Routing.plan(coord, {
            createMarker: function (i, wp, nWps) {
                if (i === 0) {
                    return L.marker(wp.latLng, {
                        icon: empti,
                    });
                    // change starting icon
                } else if (i === 1) {
                    return L.marker(wp.latLng, {
                        icon: greenIcon
                    }).bindPopup("ThisIsAmerica");
                }
                else if (i === nWps - 1) {
                    // change ending icon
                    return L.marker(wp.latLng, {
                        icon: redIcon
                    }).bindPopup("ThisIsAmerica");
                } else {
                    // change other icons
                    return L.marker(wp.latLng, {
                        icon: blueIcon
                    }).bindPopup("ThisIsAmerica");
                }
            }
        }),
        addWaypoints: false,

    }).addTo(map);

    return null;

}

interface PropsId {
    id: number
};

const Map: React.FC<PropsId> = (props: PropsId) => {
    const [id, setId] = useState(props.id | 0);
    const [route, setRoute] = useState<Route>();
    const routesService = new RoutesService();

    useEffect(() => {

        if (id != 0) {

            routesService.getRouteWithPlaces(id).then((res) => {
                console.log(id, ":::::", res, "response")
                setRoute(res);
            })
        }
    }, [])

    return (
        <div className="center-map">
            <MapContainer id="mapcontainer" center={[0, 0]} zoom={16}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <UserLocation
                    id={route ? route.id : 0}
                    name={route ? route.name : ""}
                    time_in_hours={route ? route.time_in_hours : 0}
                    distance_in_km={route ? route.id : 0}
                    places={route && route.places.length > 0 ? route.places : []} />
                <Waypoints
                    id={route ? route.id : 0}
                    name={route ? route.name : ""}
                    time_in_hours={route ? route.time_in_hours : 0}
                    distance_in_km={route ? route.id : 0}
                    places={route && route.places.length > 0 ? route.places : []} />
            </MapContainer>
        </div>
    );

}

export default Map;
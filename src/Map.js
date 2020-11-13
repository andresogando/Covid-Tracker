import React from "react";
import { MapContainer as MapLeaflet, TileLayer } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "./util";

function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="map">
      <MapLeaflet center={center} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* loop through countries and draw circles on the screen */}
        {showDataOnMap(countries, casesType)}
      </MapLeaflet>
    </div>
  );
}

export default Map;
import React from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYnJvbnljb24iLCJhIjoiRklsbENRTSJ9.21dt7yfYoQ7iSFRPkmon7A";

class Map extends React.Component {
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/bronycon/cjr2w53yj0jrv2rp82ky8lwsg",
      // style: "mapbox://styles/mapbox/streets-v9"
      // center: [-76.615779, 39.285996],
      center: [-76.615595, 39.283566],
      zoom: 14
    });

    // disable map zoom when using scroll + click
    map.scrollZoom.disable();
    map.doubleClickZoom.disable();
  }

  render() {
    return (
      <div
        ref={el => (this.mapContainer = el)}
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1,
          opacity: 0.2
        }}
      />
    );
  }
}

export default Map;

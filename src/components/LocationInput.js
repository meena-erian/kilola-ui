import { useEffect, useRef } from "react";


export default function LocationInput(props) {
    const { center, zoom, onChange } = props;
    const ref = useRef();
    useEffect(() => {
        var map = new window.google.maps.Map(ref.current, {
            center,
            zoom,
        });
        var infoWindow = new window.google.maps.InfoWindow();
        const locationButton = document.createElement("button");
        locationButton.textContent = "Pan to Current Location";
        locationButton.classList.add("custom-map-control-button");
        map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(locationButton);
        locationButton.addEventListener("click", (event) => {
            event.preventDefault();
            // Try HTML5 geolocation.
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        };

                        infoWindow.setPosition(pos);
                        infoWindow.setContent("Location found.");
                        infoWindow.open(map);
                        map.setCenter(pos);
                    },
                    () => {
                        handleLocationError(true, infoWindow, map.getCenter());
                    }
                );
            } else {
                // Browser doesn't support Geolocation
                handleLocationError(false, infoWindow, map.getCenter());
            }
        });

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(
                browserHasGeolocation
                    ? "Error: The Geolocation service failed."
                    : "Error: Your browser doesn't support geolocation."
            );
            infoWindow.open(map);
        }

        var marker = null;
        window.google.maps.event.addListener(map, "click", (event) => {
            onChange({
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            })
            if (marker) {
                marker.setMap(null);
            }
            marker = new window.google.maps.Marker({
                position: event.latLng,
                map: map,
            });
        });
    });
    return <div ref={ref} {...props} />;
}
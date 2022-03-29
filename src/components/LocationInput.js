import { useEffect, useRef } from "react";


export default function LocationInput(props) {
    const { center, zoom, onChange } = props;
    const ref = useRef();
    useEffect(() => {
        var map = new window.google.maps.Map(ref.current, {
            center,
            zoom,
        });
        console.log(map);
        var marker = null;
        window.google.maps.event.addListener(map, "click", (event) => {
            onChange({
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            })
            if(marker) {
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
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

// Replace with your venue's coordinates
const center = { lat: 28.5443, lng: 77.2726 };

const MapComponent = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Loading Map...</div>;

  // On clicking the map, redirect to Google Maps with the venue's coordinates.
  const handleMapClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/place/28%C2%B032'50.6%22N+77%C2%B016'16.8%22E/@28.5465099,77.2702789,17z/data=!4m4!3m3!8m2!3d28.5473842!4d77.2713253?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onClick={handleMapClick}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    >
      {/* You can optionally add a marker here */}
    </GoogleMap>
  );
};

export default MapComponent;

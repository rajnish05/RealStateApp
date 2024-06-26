import Geolocation from 'react-native-geolocation-service';

const useGeoLocation = ({ onLocationFetch, onError }) => {
  let location = {
    longitude: '',
    latitude: '',
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        // Extract latitude and longitude from the position object
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        // Update the location object with the new latitude and longitude
        location.latitude = latitude;
        location.longitude = longitude;

        // If an onLocationFetch callback is provided, call it with the new coordinates
        if (onLocationFetch) onLocationFetch({ longitude, latitude });
      },
      // If an onError callback is provided, call it with the error object
      error => {
        if (onError) onError(error);
      },
      {
        // Options to enable high accuracy, set timeout and maximum age for location data
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      },
    );
  };

  return {
    location,
    getLocation,
  };
};

export default useGeoLocation;

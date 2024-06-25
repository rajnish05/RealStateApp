import Geolocation from 'react-native-geolocation-service';

const useGeoLocation = ({onLocationFetch, onError}) => {
  let location = {
    longitude: '',
    latitude: '',
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        location.latitude = latitude;
        location.longitude = longitude;

        /**get callback here */
        if (onLocationFetch) onLocationFetch({longitude, latitude});
      },
      error => {
        if (onError) onError(error);
      },
      {
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

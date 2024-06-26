import { PERMISSIONS } from 'react-native-permissions';
import React from 'react';
import usePermissions from './usePermissions';
import useGeoLocation from './useGeoLocation';

export default useLocation = () => {

  const [location, setLocation] = React.useState({
    longitude: null,
    latitude: null,
  });

  const { handlePermissionRequest } = usePermissions([PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]);

  // Destructuring the getLocation function from useGeoLocation hook
  const { getLocation } = useGeoLocation({
    // Callback to execute when location data is successfully fetched
    onLocationFetch: ({ longitude, latitude }) => {
      setLocation({
        longitude,
        latitude,
      });
    },
    // Callback to execute when an error occurs during location fetching
    onError: error => { },
  });

  React.useEffect(() => {
    (async function () {
      // Await the result of the permission request
      const isGranted = await handlePermissionRequest();
      if (isGranted) {
        // If permission is granted, get the user's location
        getLocation();
      } else {
        // If permission is not granted, handle the lack of permission
        // Set the location to null
        setLocation({ latitude: null, longitude: null })
      }
    })();
  }, []);

  return location;
}
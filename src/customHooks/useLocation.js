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

  const { getLocation } = useGeoLocation({
    onLocationFetch: ({ longitude, latitude }) => {
      setLocation({
        longitude,
        latitude,
      });
    },
    onError: error => { },
  });

  React.useEffect(() => {
    (async function () {
      const isGranted = await handlePermissionRequest();
      if (isGranted) {
        getLocation();
      } else {
        // ! no permission handler
        setLocation({ latitude: null, longitude: null })
      }
    })();
  }, []);

  return location;
}
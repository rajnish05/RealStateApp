import {
  check,
  RESULTS,
  request,
  checkMultiple,
  requestMultiple,
} from 'react-native-permissions';

function usePermissions(permissions) {

  // Function to check a single permission asynchronously
  const checkSinglePermission = async () => {
    // Initialize permission granted flag to false
    let isPermissionGranted = false;
    // Check the specified permissions and store the result
    const result = await check(permissions);

    // Handle the different possible results of the permission request
    switch (result) {
      case RESULTS.GRANTED:
        isPermissionGranted = true;
        break;
      case RESULTS.LIMITED:
        isPermissionGranted = true;
        break;
      case RESULTS.DENIED:
        isPermissionGranted = false;
        break;
      case RESULTS.BLOCKED:
        isPermissionGranted = false;
        break;
      case RESULTS.UNAVAILABLE:
        isPermissionGranted = false;
        break;
    }
    // If permission is granted, check for unavailable status and return the appropriate value
    return isPermissionGranted;
  };

  // Function to check the statuses of multiple permissions asynchronously
  const checkMultiplePermission = async () => {
    // Initialize permission granted flag to false
    let isPermissionGranted = false;

    // Check the statuses of the specified permissions and store the results
    const statuses = await checkMultiple(permissions);

    // Iterate over each permission
    for (var index in permissions) {

      // Check if the current permission is granted or has limited access
      if (
        statuses[permissions[index]] === RESULTS.GRANTED ||
        statuses[permissions[index]] === RESULTS.LIMITED
      ) {
        isPermissionGranted = true;
      } else {
        // If any permission is not granted or has limited access, set flag to false and break the loop
        isPermissionGranted = false;
        break;
      }
    }

    // Return the final permission granted status
    return isPermissionGranted;
  };

  const handlePermissionCheck = async () => {
    let isPermissionGranted = false;
    if (Array.isArray(permissions)) {
      isPermissionGranted = await checkMultiplePermission();
    } else {
      isPermissionGranted = await checkSinglePermission();
    }

    return isPermissionGranted;
  };

  // Function to request a single permission asynchronously
  const requestSinglePermission = async () => {
    // Initialize permission granted flag to false
    let isPermissionGranted = false;

    // Request the specified permissions and store the result
    const result = await request(permissions);

    // Handle the different possible results of the permission request
    switch (result) {
      case RESULTS.GRANTED:
        isPermissionGranted = true;
        break;
      case RESULTS.DENIED:
        isPermissionGranted = false;
        break;
      case RESULTS.BLOCKED:
        isPermissionGranted = false;
        break;
      case RESULTS.UNAVAILABLE:
        isPermissionGranted = false;
        break;
    }

    // If permission is granted, check for unavailable status and return the appropriate value
    if (isPermissionGranted) {
      if (RESULTS.UNAVAILABLE) return !isPermissionGranted;
      else return isPermissionGranted;
    } else return isPermissionGranted;
  };

  // Function to request multiple permissions asynchronously
  const requestMultiplePermissions = async () => {
    // Initialize permission granted flag to false
    let isPermissionGranted = false;

    // Request the specified permissions and store the statuses
    const statuses = await requestMultiple(permissions);

    // Iterate over each permission
    for (var index in permissions) {
      // Check if the current permission is granted
      if (statuses[permissions[index]] === RESULTS.GRANTED) {
        isPermissionGranted = true;
        if (statuses[permissions[index]] === RESULTS.UNAVAILABLE) {
          isPermissionGranted = false;
        }
      } else {
        // If any permission is not granted, set flag to false and break the loop
        isPermissionGranted = false;
        break;
      }
    }

    // Return the final permission granted status
    return isPermissionGranted;
  };

  // Function to handle permission checks and determine if permissions are granted
  const handlePermissionRequest = async () => {
    // Initialize permission granted flag to false
    let isPermissionGranted = false;
    try {
      // Check if the permissions variable is an array
      if (Array.isArray(permissions)) {
        // If permissions is an array, check multiple permissions
        isPermissionGranted = await requestMultiplePermissions(permissions);
      } else {
        // If permissions is not an array, check a single permission
        isPermissionGranted = await requestSinglePermission(permissions);
      }
      // Return the final permission granted status
      return isPermissionGranted;
    } catch (err) {
      return isPermissionGranted;
    }
  };

  return { handlePermissionRequest, handlePermissionCheck };
}

export default usePermissions;

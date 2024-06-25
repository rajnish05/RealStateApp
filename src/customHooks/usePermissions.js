import {
    check,
    RESULTS,
    request,
    checkMultiple,
    requestMultiple,
  } from 'react-native-permissions';
  
  function usePermissions(permissions) {
    console.log("🚀 ~ usePermissions ~ permissions:", permissions)
    
    const checkSinglePermission = async () => {
      let isPermissionGranted = false;
      const result = await check(permissions);
  
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
      return isPermissionGranted;
    };
  
    const checkMultiplePermission = async () => {
      let isPermissionGranted = false;
  
      const statuses = await checkMultiple(permissions);
      for (var index in permissions) {
        if (
          statuses[permissions[index]] === RESULTS.GRANTED ||
          statuses[permissions[index]] === RESULTS.LIMITED
        ) {
          isPermissionGranted = true;
        } else {
          isPermissionGranted = false;
          break;
        }
      }
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
  
    const requestSinglePermission = async () => {
      let isPermissionGranted = false;
  
      const result = await request(permissions);
  
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
      if (isPermissionGranted) {
        if (RESULTS.UNAVAILABLE) return !isPermissionGranted;
        else return isPermissionGranted;
      } else return isPermissionGranted;
    };
  
    const requestMultiplePermissions = async () => {
      let isPermissionGranted = false;
      console.log("🚀 ~ requestMultiplePermissions ~ isPermissionGranted:", isPermissionGranted)
      const statuses = await requestMultiple(permissions);
      console.log("🚀 ~ requestMultiplePermissions ~ statuses:", statuses)
      for (var index in permissions) {
        if (statuses[permissions[index]] === RESULTS.GRANTED) {
          isPermissionGranted = true;
          if (statuses[permissions[index]] === RESULTS.UNAVAILABLE) {
            isPermissionGranted = false;
          }
        } else {
          isPermissionGranted = false;
          break;
        }
      }
  
      return isPermissionGranted;
    };
  
    const handlePermissionRequest = async () => {
      let isPermissionGranted = false;
      try{
        if (Array.isArray(permissions)) {
          isPermissionGranted = await requestMultiplePermissions(permissions); 
    
        } else {
          isPermissionGranted = await requestSinglePermission(permissions);
        }
      return isPermissionGranted;
    }catch(err){
       return isPermissionGranted;
    }
    };
  
    return {handlePermissionRequest, handlePermissionCheck};
  }
  
  export default usePermissions;
  
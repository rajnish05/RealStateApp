import { Homes } from "./Home";

const fetchHomeList = async (url:string) => {
    if (url === '/api/homes') {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const response = Homes;
      return {
        ok: true,
        status: 200,
        json: async () => response,
      };
    }
    // Handle unknown endpoints
    return {
      ok: false,
      status: 404,
      json: async () => ({ error: 'Not found' }),
    };
  };
  
  export default fetchHomeList;
  
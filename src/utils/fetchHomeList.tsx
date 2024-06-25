import { Homes } from "./Home";

/** 
 *  @author Rajnish kumar
 * @param url (string): The URL endpoint to fetch data from. Currently, it checks specifically for '/api/homes'
 * @description ok (boolean): Indicates whether the request was successful (true) or not (false).
status (number): The HTTP status code of the response (200 for success, 404 for not found).
json (function): An asynchronous function that returns the response data in JSON format.
*/

const fetchHomeList = async (url: string) => {
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

import React, { createContext, useState, useEffect, useContext } from 'react';
import fetchHomeList from '../utils/fetchHomeList';
import { Home } from '../utils/Home';
import fetchHomeDetails from '../utils/fetchHomeDetails';
import { DataContextProps } from './interface';


const DataContext = createContext<DataContextProps | undefined>(undefined);

/**  
 * @returns the current context value (context) obtained from useContext(DataContext).
 * */
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    console.log("useDataContext must be used within a DataProvider", context)
  }
  return context;
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState([]);
  const [homeDetail, setHomeDetail] = useState();

  /**
   * @author Rajnish Kumar
   * @description The fetchData function calls fetchHomeList with the URL "/api/homes".
   * @returns If the response is successful (response.ok is true), the function attempts to parse the response as JSON.
   *  If the response is not successful, an error message is logged to the console with the response status.
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchHomeList('/api/homes');
        if (response.ok) {
          const jsonData: Home[] | any = await response.json();
          setData(jsonData);
        } else {
          console.error('Error fetching data:', response.status);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchData();
  }, []);

  /**
 * @description The fetchHomeDetail function calls fetchHomeDetails with the URL "/api/homes/details".
 * @returns If the response is successful (response.ok is true), the function attempts to parse the response as JSON.
 *  If the response is not successful, an error message is logged to the console with the response status.
 */
  useEffect(() => {
    const fetchHomeDetail = async () => {
      try {
        const response = await fetchHomeDetails("/api/homes/details");
        if (response.ok) {
          const jsonData: Home[] | any = await response.json();
          setHomeDetail(jsonData);
        } else {
          console.error('Error fetching data:', response.status);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchHomeDetail();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData, homeDetail, setHomeDetail }}>
      {children}
    </DataContext.Provider>
  );
};


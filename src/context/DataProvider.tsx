import React, { createContext, useState, useEffect, useContext } from 'react';
import fetchHomeList from '../utils/fetchHomeList';
import { Home } from '../utils/Home';
interface DataContextProps {
  data: Home[]
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

// Custom hook to use DataContext
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    console.log("useDataContext must be used within a DataProvider", context)
  }
  return context;
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchHomeList('/api/homes');
        if (response.ok) {
          const jsonData: any = await response.json();
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

  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};


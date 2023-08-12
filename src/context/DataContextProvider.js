import { createContext, useContext, useReducer } from 'react';
import { DataReducer, dataInitialState } from '../reducer/DataReducer';
import { inventoryData } from '../utils/constant';

const DataContext = createContext({
  data: [],
  totalStocks: null,
  totalDelivered:null,
  lowStockItem:null,
});

export const useDataContext = () => useContext(DataContext);

const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, dataInitialState);

  const totalStocks = inventoryData.reduce((acc, curr) => curr.stock + acc, 0);

  const totalDelivered = inventoryData.reduce(
    (acc, curr) => curr.delivered + acc,
    0
  );

  const lowStockItem = inventoryData.filter(({ stock }) => stock <= 10).length;

  return (
    <DataContext.Provider
      value={{
        data: state.data,
        totalStocks,
        totalDelivered,
        lowStockItem,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

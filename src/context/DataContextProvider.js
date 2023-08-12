import { createContext, useContext, useReducer } from 'react';
import { DataReducer, dataInitialState } from '../reducer/DataReducer';

const DataContext = createContext({
 data:[]
});

export const useDataContext = () => useContext(DataContext);

const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, dataInitialState);
  console.log(state.data);

  return (
    <DataContext.Provider
      value={{
        data:state.data,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

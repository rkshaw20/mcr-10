import {v4 as uuid} from 'uuid'
import {  inventoryData } from "../utils/constant";

const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';

const setInventoryData=localStorage.setItem('inventory data', JSON.stringify(inventoryData) );
const localInventoryData=localStorage.getItem('inventory data');

export const dataInitialState = {
    data:JSON.parse(localInventoryData),
  };



  export const DataReducer = (state, action) => {
    switch (action.type) {
      case ADD_NEW_PRODUCT:
          const newProduct = {
              id: uuid(),
              ...action.payload
          };
          const updatedData = [...state.data, newProduct];

          localStorage.setItem('inventory data', JSON.stringify(updatedData));
          return {
              ...state,
              data: updatedData,
          };

      default:
          return state;
  }
};

import { json } from "react-router-dom";
import {  inventoryData } from "../utils/constant";

const setInventoryData=localStorage.setItem('inventory data', JSON.stringify(inventoryData) );
const localInventoryData=localStorage.getItem('inventory data');

export const dataInitialState = {
    data:JSON.parse(localInventoryData),
  };

  export const DataReducer=(state,action)=>{
    switch(action.type){

    }
  }
  
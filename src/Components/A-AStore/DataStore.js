import {createStore, combineReducers} from "redux";
import { ProductReducers } from "../D-ProductsFiles/ProductReducers"
import { MyCarouselData } from "../B-MyCaroselData/MyCarouselData";


export const DataStore =()=>{
     const store = createStore(combineReducers({ ProductReducers,
      MyCarouselData}),
     
   window.__REDUX_DEVTOOLS_EXTENSION__&&
   window.__REDUX_DEVTOOLS_EXTENSION__()
     );
     return store;
};
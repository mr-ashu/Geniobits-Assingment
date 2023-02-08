import axios from "axios";
import { DATA_ERROR, DATA_LOADING, DATA_SUCCESS } from "./Data.type";
 

export const dataAction = (data) => async (dispatch) => {
  dispatch({ type: DATA_LOADING});
  
  try {
    let response = await axios.get(`http://localhost:8000/data` );
    dispatch({ type: DATA_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: DATA_ERROR });
  }
};
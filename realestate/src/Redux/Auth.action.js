import axios from "axios";
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./Auth.type";

export const login = (data) => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  try {
    let response = await axios.post(`https://job-eadj.onrender.com/login`, data);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
 
  } catch (error) {
    dispatch({ type: LOGIN_ERROR });
  }
};
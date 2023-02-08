import { DATA_ERROR, DATA_LOADING, DATA_SUCCESS } from './Data.type'
 

 
const initialState={
    data:[] ,
    loading:true,
    error:true

}

export const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DATA_SUCCESS: {
 
      return {
        ...state,
        data:payload,
        loading: false,
        error: false
      }
    }
    case DATA_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }
    case DATA_ERROR: {
 
      return {
        ...state,
        error:true,
      
      }
    }
  
    default: {
      return state
    }
  }

}
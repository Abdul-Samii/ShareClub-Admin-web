import { types } from "../actionTypes";

const initialState = {
  isLoading: false,
  requests:[]
};

export default (state = initialState, {type,payload}) => {
  switch (type) {
    case types.GET_NEEDY_REQ_START:
      return { ...state, isLoading: true }
  case types.GET_NEEDY_REQ_SUCCESS:
      console.log(payload)
      return { ...state, isLoading: false , requests:payload}
  case types.GET_NEEDY_REQ_FAILED:
      return { ...state, isLoading: false }
    default:
      return state;
  }
};
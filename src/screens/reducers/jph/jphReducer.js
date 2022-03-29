import produce from 'immer';
import { JPH_ACTION_CONST } from "../../../services/const/actionConst";

const {
  JPH_API_CALL_ACTION, 
  JPH_API_CALL_ACTION_FAILURE, 
  JPH_API_CALL_ACTION_SUCCESS
} = JPH_ACTION_CONST;

const initState = {
  jphApiResult: {
    processing: false, 
    processed: false, 
    message: "",
    result: null 
  }
}

export default function jphReducer(state = initState, action) {
  return produce(state, draft => {
    switch (action.type) {
    case JPH_API_CALL_ACTION:
      console.log("jphReducer GGAGGUNG")
      break;
    case JPH_API_CALL_ACTION_SUCCESS:
      break;
    case JPH_API_CALL_ACTION_FAILURE:
      break;
      default:
      return state;
  }
})
}

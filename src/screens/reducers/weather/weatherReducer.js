import produce from 'immer';
import { WEATHER_ACTION_CONST } from "../../../services/const/actionConst";

const {
  WEATHER_API_CALL_ACTION,
  WEATHER_API_CALL_ACTION_SUCCESS,
  WEATHER_API_CALL_ACTION_FAILURE
} = WEATHER_ACTION_CONST;

const initState = {
  weatherApiResult: {
    processing: false, 
    processed: false, 
    message: '',
    result: null
  }
}

export default function weatherReducer(state = initState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case WEATHER_API_CALL_ACTION:
        draft.weatherApiResult = {...draft.weatherApiResult, processing: true, 
          processed: true, message: "Call Api", result: null}
        break;
      case WEATHER_API_CALL_ACTION_SUCCESS: 
        console.log(action.payload)
        draft.weatherApiResult = {...draft.weatherApiResult, processing: false, 
          processed: true, message: "succussfully Called Api ", result: (action.payload)}
        break;
      case WEATHER_API_CALL_ACTION_FAILURE:
        console.log(action.payload)
        draft.weatherApiResult = {...draft.weatherApiResult, processing: false, 
          processed: false, message: "Call Api fail", result: (action.payload)}
        break;
      default:
      return state;
  }
})
}

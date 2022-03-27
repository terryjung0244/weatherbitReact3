import produce from 'immer';
import { WEATHER_ACTION_CONST } from "../../../services/const/actionConst";

const {
  WEATHER_API_CALL_ACTION
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
      default:
      return state;
  }
})
}

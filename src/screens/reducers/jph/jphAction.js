import { JPH_ACTION_CONST } from "../../../services/const/actionConst";

const {
  JPH_API_CALL_ACTION, 
  JPH_API_CALL_ACTION_FAILURE, 
  JPH_API_CALL_ACTION_SUCCESS
} = JPH_ACTION_CONST;

export const jphReducerJphApiCallAction = (number) => {
  return {
    type: JPH_API_CALL_ACTION, payload: number
  }
}

export const jphReducerJphApiCallActionSuccess = () => {
  return {
    type: JPH_API_CALL_ACTION_SUCCESS
  }
}

export const jphReducerJphApiCallActionFailure = () => {
  return {
    type: JPH_API_CALL_ACTION_FAILURE
  }
}
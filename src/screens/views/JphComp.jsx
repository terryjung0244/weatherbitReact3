import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { jphReducerJphApiCallAction } from '../reducers/jph/jphAction'

const JphComp = () => {

  const jphReducerSelector = useSelector(state => state.jphReducer)

  const dispatch = useDispatch()

  const onClickJph = () => {
    dispatch(jphReducerJphApiCallAction())
  }

  return (
    <div>
      <div onClick={onClickJph}>
        Click Me
      </div>
    </div>
  )
}

export default JphComp

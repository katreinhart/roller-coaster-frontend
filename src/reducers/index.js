import { combineReducers } from 'redux'
import _ from 'lodash'

import * as constants from '../actions/constants'

const INITIAL_STATE = []

export function roller_coasters(state = INITIAL_STATE, action){
  switch (action.type) {
    case constants.FETCH_ROLLER_COASTERS_SUCCESS:
      return action.payload
    // case ADD_ROLLER_COASTER:
    //   const sorted_coasters = state.sort((a,b) => a.id-b.id)
    //   const id = state.length > 0 ? sorted_coasters[state.length-1].id + 1 : 1
    //   const coaster = {id, ...action.payload}
    //   return [..._.cloneDeep(state), coaster]

    case constants.UPDATE_ROLLER_COASTER:
      return [...state.map((e,i) => {
        if(e.id === action.payload.id) return action.payload
        return { ...e }
      })]

    case constants.DELETE_ROLLER_COASTER:
      return [..._.cloneDeep(state).filter(e => e.id !== action.payload)]
      
    default:
      return state
  }
}

export function row_to_update(state = null, action){
  switch(action.type){
    case constants.UPDATE_ROLLER_COASTER:
    case constants.UPDATE_ROW:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  roller_coasters,
  row_to_update
})

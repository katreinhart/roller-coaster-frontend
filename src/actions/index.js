export const ADD_ROLLER_COASTER = 'ADD_ROLLER_COASTER'
export const DELETE_ROLLER_COASTER = 'DELETE_ROLLER_COASTER'
export const UPDATE_ROLLER_COASTER = 'UPDATE_ROLLER_COASTER'
export const UPDATE_ROW = 'UPDATE_ROW'

export function addRollerCoaster(coaster){
  return {
    type: ADD_ROLLER_COASTER,
    payload: coaster
  }
}

export function deleteRollerCoaster(coasterId){
  return {
    type: DELETE_ROLLER_COASTER,
    payload: coasterId
  }
}

export function updateRollerCoaster(coaster){
  return {
    type: UPDATE_ROLLER_COASTER,
    payload: coaster
  }
}

export function updateRow(coasterId){
  return {
    type: UPDATE_ROW,
    payload: coasterId
  }
}

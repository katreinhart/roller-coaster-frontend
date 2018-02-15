import * as constants from './constants'

export function fetchRollerCoasters() {
  return async (dispatch) => {
    const res = await request(`/api/rollercoasters`)
    const json = await res.json()

    dispatch({
      type: constants.FETCH_ROLLER_COASTERS_SUCCESS,
      payload: json.roller_coasters
    })
  }
}

export function addRollerCoaster(coaster){
  return async (dispatch) => {
    const res = await request('/api/rollercoasters', 'POST', coaster)
    const json = await res.json()

    // can be kind of slow, making 2 round trips, but maintains DB as single source of truth
    dispatch(fetchRollerCoasters()) 
    // // could also do this:
    // dispatch({
    //   type: ADD_ROLLER_COASTER,
    //   payload: json['roller,coaster']
    // })
  }
}

export function deleteRollerCoaster(coasterId){
  return async (dispatch) => {
    const res = await request(`/api/rollercoasters/${coasterId}`, 'DELETE')
    const json = await res.json()

    dispatch(fetchRollerCoasters())
  }
}

export function updateRollerCoaster(coaster){
  return async (dispatch) => {
    const res = await request(`/api/rollercoasters/${coaster.id}`, 'PUT', coaster)
    const json = await res.json()

    dispatch({
      type: constants.UPDATE_ROLLER_COASTER, 
      payload: coaster
    })
  }
}

export function updateRow(coasterId){
  return {
    type: constants.UPDATE_ROW,
    payload: coasterId
  }
}

async function request(path, method = 'GET', body = null) {
  if (body) body = JSON.stringify(body)
  return await fetch(`${process.env.REACT_APP_API_URL}${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: body
  })
}
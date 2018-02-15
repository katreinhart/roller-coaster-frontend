import * as constants from '../actions/constants'
import { roller_coasters } from './index'

describe('Roller coaster reducer', () => {
  it('initializes the default state', () => {
    const initialState = {}
    const action = { type: constants.FETCH_ROLLER_COASTERS_SUCCESS, payload: { roller_coasters: [{
      name: "some coaster"
    }] } }

    const expectedState = {roller_coasters: [{name: "some coaster"}]}
    expect(roller_coasters(initialState, action)).toEqual(expectedState)

  })
})
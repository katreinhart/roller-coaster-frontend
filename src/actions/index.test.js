import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import * as constants from './constants'
import * as actions from './index'

const createMockStore = configureMockStore([thunk])
const store = createMockStore({ roller_coasters: [] })

describe('Roller coaster action creators', () => {
  const mockDispatch = jest.fn()

  const mockResponse = { body: { roller_coasters: [] }}

  fetchMock.get(`undefined/api/rollercoasters`, mockResponse)

  describe('fetch roller coasters action', () => {

    it('should return an async dispatch action', () => {
      const expectedActions = [{ type: constants.FETCH_ROLLER_COASTERS_SUCCESS, payload: mockResponse.body.roller_coasters}]

      return store.dispatch(actions.fetchRollerCoasters()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})
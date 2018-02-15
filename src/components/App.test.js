import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

describe('App', () => {
  const app = shallow(<App />)

  it('renders without crashing', () => {
    expect(app).toMatchSnapshot()
  })

  it('contains a jumbotron with text Rollercoasters List', () => {
    expect(app.find('.jumbotron').exists()).toBe(true)
    expect(app.find('.jumbotron').text()).toContain('Rollercoasters List')
  })

  it ('renders a RollerCoasterTable component', () => {
    expect(app.find('RollerCoasterTable').exists()).toBe(true)
  })
})
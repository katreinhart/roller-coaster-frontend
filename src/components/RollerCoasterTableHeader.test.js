import React from 'react'
import { shallow } from 'enzyme'

import RollerCoasterTableHeader from './RollerCoasterTableHeader'

describe('RollerCoasterTableHeader', () => {
  const rcth = shallow(<RollerCoasterTableHeader />)

  it('renders without crashing', () => {
    expect(rcth).toMatchSnapshot()
  })
})
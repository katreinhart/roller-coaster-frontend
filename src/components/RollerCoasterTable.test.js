import React from 'react'
import { shallow } from 'enzyme'

import RollerCoasterTable from './RollerCoasterTable'

describe('RollerCoasterTable', () => {
  const rct = shallow(<RollerCoasterTable />)

  it('renders without crashing', () => {
    expect(rct).toMatchSnapshot()
  })

  it('contains a RCTHeader component', () => {
    expect(rct.find('RollerCoasterTableHeader').exists()).toBe(true)
  })

  it('contains a connected RollerCoasterTableAddContent component', () => {
    expect(rct.find('Connect(RollerCoasterTableAddContent)').exists()).toBe(true)
  })

  it('contains a RollerCoasterTableContent component', () => {
    expect(rct.find('Connect(RollerCoasterTableBody)').exists()).toBe(true)
  })
})
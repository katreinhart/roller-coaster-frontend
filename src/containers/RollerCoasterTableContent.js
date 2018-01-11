import React from 'react'
import { connect } from 'react-redux'

import RollerCoasterTableContentRowData from './RollerCoasterTableContentRowData'
import RollerCoasterTableContentUpdate from './RollerCoasterTableContentUpdate'

function RollerCoasterTableBody (props){
  const { roller_coasters, row_being_edited } = props
  return (
    <tbody>
      {
        roller_coasters.map((e,i) =>
          row_being_edited === e.id ?
          <RollerCoasterTableContentUpdate key={i} {...e} /> :
          <RollerCoasterTableContentRowData key={i} {...e} /> )
      }
    </tbody>
  )

}

function mapStateToProps(state, ownProps){
  return {
    roller_coasters: state.roller_coasters,
    row_being_edited: state.row_to_update
  }
}

export default connect(mapStateToProps)(RollerCoasterTableBody)

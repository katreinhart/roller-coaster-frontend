import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRow, deleteRollerCoaster } from '../actions'

function RollerCoasterTableContentRowData(props){
  const { id, name, park, city, state, updateRow, deleteRollerCoaster } = props
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{park}</td>
      <td>{city}</td>
      <td>{state}</td>
      <td>
        <span
          onClick={() => updateRow(id)}
          className='btn btn-primary btn-block'>
          Edit
        </span>
      </td>
      <td>
        <span
          onClick={() => deleteRollerCoaster(id)}
          className='btn btn-danger btn-block'>
          Delete
        </span>
      </td>
    </tr>
  )
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({updateRow, deleteRollerCoaster}, dispatch)
}

export default connect(null, mapDispatchToProps)(RollerCoasterTableContentRowData)

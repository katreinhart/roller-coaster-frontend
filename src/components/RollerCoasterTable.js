import React from 'react'
import RollerCoasterTableHeader from './RollerCoasterTableHeader'
import RollerCoasterTableContent from '../containers/RollerCoasterTableContent'
import RollerCoasterTableAddContent from '../containers/RollerCoasterTableAddContent'


function RollerCoasterTable({roller_coasters}){
  return (
    <table className="table table-sm">
      <RollerCoasterTableHeader />
      <RollerCoasterTableAddContent />
      <RollerCoasterTableContent />
    </table>

  )
}


export default RollerCoasterTable

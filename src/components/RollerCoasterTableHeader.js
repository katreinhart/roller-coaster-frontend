import React from 'react'


function RollerCoasterTableHeader(props){
  return (
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Park</th>
        <th>City</th>
        <th>State</th>
        <th className='buttonFixedSize'>Edit</th>
        <th className='buttonFixedSize'>Delete</th>
      </tr>
    </thead>
  )
}

export default RollerCoasterTableHeader

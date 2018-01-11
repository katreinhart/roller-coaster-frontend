import React from 'react';
import RollerCoasterTable from './RollerCoasterTable'


function App() {
  return (
    <div className='container'>
      <div className='jumbotron'>
        <div className='display-4 text-center'>🎢 Rollercoasters List! 🎢</div>
      </div>
      <div className='container'>
        <div className='row'>
          <RollerCoasterTable />
        </div>
      </div>
    </div>
  );
}

export default App;

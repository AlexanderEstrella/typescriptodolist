import React from 'react';
import './App.css';
import Inputfield from './components/inputfeild';


const App: React.FC = () => {
  return (
    <div className="App">
      <span className='heading'>Taskify </span>
        <Inputfield />

    </div>
  );
}

export default App;

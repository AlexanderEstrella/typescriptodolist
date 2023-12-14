import React, { useState } from 'react';
import './App.css';
import Inputfield from './components/inputfeild';


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [items, setItems] = useState([])
  console.log(todo);
  return (
    <div className="App">
      <span className='heading'>Taskify </span>
      <Inputfield todo={todo} setTodo={setTodo} />
      

    </div>
  );
}

export default App;

import React, { ReactComponentElement } from 'react'
import "./styles.css"
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
export default function inputfield({todo, setTodo}:Props) {
  return (
    <form action="
    "
      className='input'>
      <input type="input" placeholder='Enter a task' className='input_box'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className='input_submit'> Go</button>

    </form>
  )
}



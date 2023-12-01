import React from 'react';
import './App.css';

let any: any;
let name: string;
let age: number | string;
age = "hello";
let isStudent: boolean;
let hobbies: string[];
let role: [number, string?];

type Person = {
  name: string;
  age?:number, 
}

let person: Person = {
  name: "alex",
  age:23,
}
let printName: (name:string ) => void;


let lotsOfPeople: Person[];

function App() {
  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;

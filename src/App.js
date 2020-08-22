import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const naioks = ['anowar', 'salman', 'jafar']
  return (
    <div className="App">
      <header className="App-header">
       <p>I am react person kk</p>
       <Person name='hanif' nika='rahima'></Person>
       <Person name='habib' nika='habiba'></Person>
      </header>
    </div>
  );
}
function Person(props) {
  
  return(
    
    <div style={{border:'5px solid red', width:'1000px'}}>
      <h2> name: {props.name}</h2>
      <p>nika: {props.nika}</p>
    </div>
  )
}


export default App;

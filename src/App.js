import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const naioks = ['anowar', 'salman', 'jafar']
  return (
    <div className="App">
      <header className="App-header">
       <p>I am react person kk</p>
       <Person name= {naioks[0]} naika='tuntuni'></Person>
       <Person name= 'jahim' naika='shabana'></Person>
       <Person name="bapparaz" naika="shabana"></Person>
      </header>
    </div>
  );
}
function Person(props){
  const personStyle={
    border: '5px solid gray',
    margin: '10px'
  }
  console.log(props)
  return (
  <div style= {personStyle}>
    <h1>Name: {props.name} </h1>
    <h3>Hero of {props.naika}</h3>
  </div>
  )
}



export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p>I am react person kk</p>
       <Person></Person>
       <Person></Person>
       <Person></Person>
      </header>
    </div>
  );
}
function Person(){
  const personStyle={
    border: '5px solid gray',
    margin: '10px'
  }
  return (
  <div style= {personStyle}>
    <h1>Name: Tuntuni</h1>
    <h3>Hero of the year</h3>
  </div>
  )
}



export default App;

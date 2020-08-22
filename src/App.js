import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const naioks = ['anowar', 'salman', 'jafar']
  const products= [
    {name: 'Shorisha Tel', price:'$9.99'},
    {name:'modhu', price: '$1000'},
    {name:'ghee', price:'$1600'}
]
  return (
    <div className="App">
      <header className="App-header">
       <p>I am react person kk</p>
       <Product product={products[0]}></Product>
       <Product product={products[1]}></Product>
       <Person name='hanif' nika='rahima'></Person>
       <Person name='habib' nika='habiba'></Person>
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h1>{price}</h1>
      <button>Buy now</button>
    </div>
  )
}

function Person(props) {
  
  return(
    
    <div style={{border:'5px solid gray', width:'1000px', margin:'1px'}}>
      <h2> Name: {props.name}</h2>
      <p>Nika: {props.nika}</p>
    </div>
  )
}


export default App;

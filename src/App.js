import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const naioks = ['anowar','salman','jafarrrrrrr']
  const products= [
    {name: 'Shorisha Tel', price:'$9.99'},
    {name:'modhu', price: '$1000'},
    {name:'ghee', price:'$1600'},
    {name:'ghee', price:'$1600'},
    {name:'ghee', price:'$1600'}
]
  return (
    <div className="App">
      <header className="App-header">
       <p>I am react person kk</p>
       <Counter></Counter>
       <Users></Users>
       <ul>
       {
         naioks.map(naiok => <li>{naiok}</li>)
       }
       {
         products.map(product=> <li>{product.name}</li>)
       }
       </ul>
       {
         products.map(product=> <Product product={product}></Product>)
       }
       <Product product={products[0]}></Product>
       <Product product={products[1]}></Product>
       <Person name='hanif' nika='rahima'></Person>
       <Person name='habib' nika='habiba'></Person>
      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
    <h3>Dynamic Users: {users.length}</h3>
    <ul>
    </ul>
    {
      users.map(user=> <li>{user.name}</li>)
    }
    {
      users.map(user=> <li>{user.email}</li>)
    }
    </div>
  )
}

function Counter() {
  const[count, setCount] = useState(0);
  //const handleIncrease = () => setCount(count+1);

  return(
    <div>
    <h1>Count: {count} </h1>
    <button onClick={() => setCount(count+1)}>Increase</button>
    <button onClick={() => setCount(count - 1)}>Decrease</button>
    <button onClick={() => setCount(count==0)}>Clear</button>
    </div>
  )
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

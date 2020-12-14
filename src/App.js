import { useState } from 'react';
import './App.css';

function App() {
  // var names = ['Sakib Al Hasan', 'Al Hasan', 'Sakib'];
  var nayoks = ['patlakhan','Razzak','Joshim', 'Manna']
  const products = [
    {title: 'PhotoShop', price: 'US$20.99/mo'},
    {title: 'Illustrator', price: 'US$20.99/mo'},
    {title: 'InDesign', price: 'US$20.99/mo'},
    {title: 'Abode XD', price: 'US$20.99/mo'},
    {title: 'PDF Reader', price: 'US$25.99/mo'}
  ]


  return (
    <div className="App">
      <header className="App-header">
        {/* <Person name={names[0]} Occupation="xyz" Age="30" Details="Lorem Ipsum" ></Person>
        <Person name={names[1]} Occupation="xyz" Age="25" Details="Lorem Ipsum01" ></Person>
        <Person name={names[2]} Occupation="xyz" Age="20" Details="Lorem Ipsum02" ></Person> */}
      
      <Count></Count>
      <ul>
        {
          products.map(productName => <li>{productName.title}</li>)
        }
      </ul>
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
      </ul>
      {
        products.map(pd => <Product product={pd}></Product>)
      }
      </header>
    </div>
  );
}

function Count(){
  const [count, setCount] = useState(10);
  return (
    <h1>Count: {count}</h1>
  );
}

function Product(props){
  var ProductStyle = {
    borderRadius: '5px',
    backgroundColor: 'grey',
    padding: '5px',
    height: '200px',
    width: '300px',
    float: 'left',
    margin: '10px'
  }
  const {title, price} = props.product;
  return(
    <div style={ProductStyle}>
      <h1>{title}</h1>
      <p>{price}</p>
      <button>Buy Now</button>
    </div>
  );
}

// function Person(props){
//   const NameStyle = {
//     border: '2px solid red', margin: '10px'
//   }
//   console.log(props);
//   return(
//     <div style={NameStyle} >
//     <h1>Name: {props.name} </h1>
//     <p>Occupation: {props.Occupation} </p>
//     <p>Age: {props.Age} </p>
//     <p>Details: {props.Details}</p>
//     </div>
//   );
// }

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import Title from "./Title.jsx"
import Product from "./Product.jsx"
import ProductTab from "./productTab.jsx"
import Button from './Button.jsx'
import Form from './form.jsx'

function Description(){
  return <p>I am the Description.</p>
}

function App() {
  let name = "arhan"
  return (
  <div>
    {/* <h1>This is my app component</h1>
    <p>Inside app component we have : </p>
    <p>{name.toUpperCase()}</p>
    <p>2*2 = {2*2}</p>
    <Title/>
    <Description/> */}

    {/* <ProductTab/> */}
    {/* <Button/> */}
    <Form/>
    
  </div>
  ) 
}

export default App
import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import { products } from '../data'

function Home({setCartID}) {
  console.log(setCartID,"datas");

  return (
    <div>
      <Navbar/>
      {
        products.map((items,key)=>(
          <Card key={key} setCart={setCartID}  products={items}/>
        ))

      }
    </div>
  )
}

export default Home
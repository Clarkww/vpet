import React from 'react'

import poo from './img/pet/angrypoo.png'


export default function ({cleanness}) {


  // need up to 3 poos added to the screen based on cleanliness
  console.log(cleanness)
  const addPoo = () => {
    let pooArray = []
    let index = 1
    // add a poo for every 33% cleanness
    while (index <= Math.floor(cleanness / 33)) {
      pooArray.push(<img src={poo} alt="poo" className={`poo-${index}`} key={index}/>)
      index++
    }

    return pooArray
  }



  return (
    <div className='poo'>
        {addPoo()}
    </div>
  )
}

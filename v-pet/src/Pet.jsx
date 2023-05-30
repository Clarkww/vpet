import React, { useState, useEffect} from 'react'

import catGif from './img/pet/cat.gif'

export default function ({pet, setPet}) {

    let [petPositionTop, setPetPositionTop] = useState(330)
    // let petPositionLeft = 200
    let [petPositionLeft, setPetPositionLeft] = useState(43)
    const [isMovingUp, setIsMovingUp] = useState(true)

    let petHeight = 100

    useEffect(() => {
      let interval = setInterval(() => {
        setPetPositionTop((prevPosition) => {
          if (isMovingUp) {
            // Move up
            if (prevPosition >= 330 - petHeight) { // Update stopping position
              setIsMovingUp(false)
            }
            return prevPosition - 3 // Update direction of movement
          } else {
            // Move down
            if (prevPosition <= 330) { // Update stopping position
              setIsMovingUp(true)
            }
            return prevPosition + 3 // Update direction of movement
          }
        })
      }, 1000)
  
      return () => {
        clearInterval(interval)
      }
    }, [isMovingUp])

    // q: why does the pet keep moving up?
    // a: because the useEffect is only called once, and the isMovingUp variable is always true
    // q: how do we fix this?




  return (
    <div className='pet' style={{top: petPositionTop + 'px', left: petPositionLeft + 'vw' }}>

        
    </div>
  )
}




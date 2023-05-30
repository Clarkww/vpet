import { useState, useEffect } from 'react'

import './styles.css'

import Pet from './Pet.jsx'

import Health from './Health.jsx'

import Cleanness from './Cleanness.jsx'



function App() {

  let [pet, setPet] = useState({
    name: 'Fido',
    age: 0,
    health: 100,
    hunger: 0,
    happiness: 0,
    cleanliness: 0,
    weight: 0,
  })



  
  function checkHealth(){
    if(pet.hunger >= 30){
      setPet((pet) => {
        return {
          ...pet,
          health: pet.health - 1,
        }
      })
    } else if(pet.hunger == 0){
      setPet((pet) => {
        return {
          ...pet,
          // pet max health 100
          health: Math.min(pet.health + 10, 100),          
        }
      })
    }
  }


  let [statsDisplayToggle, setStatsDisplayToggle] = useState("none")






  // use effect for pet hunger

  useEffect(() => {
    let interval = setInterval(() => {
   
      setPet((pet) => {
        return {
          ...pet,
          hunger: pet.hunger + 1,
        }
      })
    }, 9000)
    return () => {
      clearInterval(interval)
    }
  }, [])


  // use effect for pet age


  useEffect(() => {
    let interval = setInterval(() => {
      setPet((pet) => {
        return {
          ...pet,
          age: pet.age + 1,
          }
          })
          }, 20000)
          return () => {
            clearInterval(interval)
            }
        }, [])

            
  // use effect for pet cleanliness  

  useEffect(() => {
    let interval = setInterval(() => {
      // remove 1 from cleanliness every 10 seconds
      setPet((pet) => {
        return {
          ...pet,
          // lowest 0
          cleanliness: Math.max(pet.cleanliness + 1, 0),
        }
      })
    }, 10000)
    return () => {
      clearInterval(interval)
    }
  }, [pet.cleanliness])
  
  
  // use effect to call checkHealth function


  useEffect(() => {
    let interval = setInterval(() => {
      checkHealth()
    }, 3000)
    return () => {
      clearInterval(interval)
    }
  }, [pet.health, pet.hunger ])
            


  return (
    <>
      <div className='game-area'>

        <div className="top-stats-display">
          <div className='health-display-area'>
            <Health petHealth={pet.health} />
          </div>
          
          <div className="hunger-display">
            <p>Hunger</p>
            <div className="hunger-bar">
              <div className="hunger-bar-fill" style={{ width: `${pet.hunger}%` }}></div>
            </div>
          </div>
        </div>
        

        <Pet pet={pet} setPet={setPet}/>
        <Cleanness cleanness={pet.cleanliness}/>



        <div className="button-area">
          <button className='btn' onClick={() => {
            // clearInterval(interval)
            console.log(pet)

            setPet((pet) => {
              return {
                ...pet,
                hunger: Math.max(pet.hunger - 50, 0),
                }
              })
              }}>
              Feed
            </button>


            <button className='btn' onClick={() => {
              setPet((pet) => {
                return {
                  ...pet,
                  cleanliness: Math.max(pet.cleanliness - 50, 0),
                }
                }
                )}}>
              Clean
            </button>

            <button className='btn' onClick={() => {
              if(statsDisplayToggle === "none"){
                setStatsDisplayToggle("block")
                
              } else if (statsDisplayToggle === "block"){
                setStatsDisplayToggle("none")
                
              }
            }}>
              Stats
            </button>

            {/* stats display div */}


        </div>
        <div className="stats-display" style={{display: statsDisplayToggle}}>
          <p>Age: {pet.age}</p>
          <p>Health: {pet.health} </p>
          <p>Happiness: {pet.happiness}</p>
          <p>Hunger: {pet.hunger}</p>


        </div>

        {/* q: why is the display not toggleing on click */}
        {/* a: because the statsdisplaytoggle variable is not being updated */}
        {/* q: how do we update the statsdisplaytoggle variable */}
        
      </div>
    </>
  )
}

export default App

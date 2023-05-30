import React from 'react'

import health5 from './img/heartshealth5.png'

import health4 from './img/heartshealth4.png'

import health3 from './img/heartshealth3.png'

import health2 from './img/heartshealth2.png'

import health1 from './img/heartshealth1.png'

import health0 from './img/heartshealth0.png'


export default function ({petHealth}) {
  return (
    <>
        <img className='health-img' src={petHealth >= 80 ? health5 : petHealth >= 60 ? health4 : petHealth >= 40 ? health3 : petHealth >= 20 ? health2 : petHealth >= 0 ? health1 : health0} alt="health" />


    
    </>
  )
}

import React from 'react'
import {styles} from '../style'
import Feedback from './Feedback'
import { airbnb,binance,coinbase,dropbox } from '../assets'

const Testmonials = () => {
  return (
    <div className={`${styles.paddingY} ${styles.flexCenter} relative flex-col`}>
      <div className={`flex sm:flex-row flex-col flex-1  w-[100%] ${styles.flexStart} `}>
      
      <h2 className={`font-poppins w-full mr-20  text-[40px] font-semibold text-white relative leading-[68px] w-full`}>
      What people are <br /> saying about us
    </h2>
      
   <div className={`w-full ml-30`} >
   <p className={`${styles.paragraph}  max-w-[470px] mt-5 `}>
    Everything you need to accept card payments and grow your business anywhere on the planet.
    </p>
   </div>
      </div>

      <  Feedback />
      <div className={`flex sm:flex-row flex-col ml-10 ${styles.flexCenter}`}>
      <div>
        <img src={airbnb} className={`h-[80%] w-[60%]`} />
        
      </div>
      <div>
        <img src={binance} className={`h-[80%] w-[60%]`} />
        
      </div>
      <div>
        <img src={coinbase} className={`h-[80%] w-[60%]`} />
        
      </div>
      <div>
        <img src={dropbox} className={`h-[80%] w-[60%]`} />
        
      </div>
     
      </div>
    </div>
  )
}

export default Testmonials
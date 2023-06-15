import React from 'react'
import {styles} from '../style'
import { arrowUp } from '../assets'
const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter } w-[140px] h-[140px]  rounded-full bg-blue-gradient p-[2px]
    cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexCenter} flex-col`}>
        <p className='text-[18px] font-poppins font-medium flex flex-row'>
        <span className='text-gradient'>Get</span>
        <img src={arrowUp} alt='arrou-up' className='h-[23px] w-[23px]' />
        </p>
        <p className='text-[18px] font-poppins font-medium'>
        <span className='text-gradient'>Started</span>
        
        </p>
      </div>
      </div>
    </div>
  )
}

export default GetStarted
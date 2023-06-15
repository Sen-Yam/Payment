import React from 'react'
import {styles,layout} from '../style'
import Button from './Button'
const CTA = () => {
  return (
    <div className={`${styles.flexCenter} ${styles.padding} flex flex-row hover rounded-[20px] `}>
      <div className={`flex flex-col relative w-[60%] mr-20 `}>
      <h2 className={`font-poppins   text-[40px] font-semibold text-white leading-[68px] w-full`}>Let's try our service now!</h2>
      <div className={`w-[80%]`}>
      <p className={`${styles.paragraph} mt-6 `}>
    Everything you need to accept card payments <br /> and grow your business anywhere on the planet
    </p>
      </div>
      </div>
      <div>  <Button /></div>
     
    </div>
  )
}

export default CTA
import React from 'react'
import {card} from '../assets'
import Button from './Button'
import {styles ,layout} from '../style'
const CardDeal = () => {
  return (
      
    <div className={`${styles.paddingY} flex md:flex-row flex-col`}>
      <div  className={` ${layout.sectionInfo} `}>
      <h2 className={`font-poppins   text-[40px] font-semibold text-white leading-[68px] w-full`}>
      Find a better card deal <br /> in few easy steps
    </h2>
    <p className={`${styles.paragraph}  max-w-[470px] mt-5 `}>
    Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet
     eget mauris tortor.ç Aliquet ultrices ac, ametau.
    </p>
    <Button styles={`mt-10`} />
      </div>
      

      <div className={`${layout.sectionImg}`}> 

      <img src={card} className={`  w-[100%] h-[100%]`} />
      </div>
      
     

    </div>
  )
}

export default CardDeal
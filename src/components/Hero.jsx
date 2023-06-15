import React from 'react'
import {styles} from '../style'
import {robot,discount} from '../assets'
import GetStarted from './GetStarted'
import '../index.css'
const Hero = () => {
  return (
   <div id='home' className={`flex sm:flex-row flex-col ${styles.paddingY}`}>
    <div
    className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    > 
  <div
  className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}
  >
    <img src={discount} alt='discount' className={`h-[32px] w-[32px]`} />
   <p className={`${styles.paragraph} ml-2`}>
   <span className={`text-white`}>20% </span>Discount For <span className={`text-white`}>1 Month </span>Account
   </p>
  </div>
  <div className={`flex flex-row items-center justify-between w-full`}>
    <h1 className={`font-poppins flex-1 text-[52px] font-semibold text-white leading-[75px  ]`}>
      The Next <br /> <span className={`text-gradient`}>Generation <br/> </span> 
    </h1>
    <div style={{marginLeft:'30%'}} className={`ss:flex hidden `}>
      <GetStarted />
    </div>
  </div>
  <h1 className={`font-poppins w-[110%]  text-[52px] font-semibold text-white leading-[68px] w-full`}>
      Payment Method
    </h1>
    <p className={`${styles.paragraph}  max-w-[470px]`}>
    Our team of experts uses a methodology to identify the credit cards most likely to
     fit your needs. We examine annual percentage rates, annual fees.
    </p>
    </div>
    <div>
      <img src={robot} className={`  w-[80%] h-[100%] relative z-[5] ml-20 mr-[10%]`} />
      <div  className={`absolute  pink__gradient  flex-1  z-[0] ml-0 top-20 w-[30%] h-[65%]`}/>
      <div style={{marginLeft:'-10%'}}  className={`absolute flex-1 white__gradient rounded-full mb-40  z-[0]  top-0 w-[40%] h-[80%]`}/>
      <div style={{backgroundColor:'white'}} className="absolute flex-1 ml-[10%]  z-[0] w-[40%] h-[70%]  bottom-5 blue__gradient" />
    </div>
    <div   className={`sm:hidden ${styles.flexCenter}  `}>
      <GetStarted />
    </div>
   </div>
  )
}

export default Hero
import React from 'react'
import {styles} from '../style'
import {features} from '../constants/index'
import Button from './Button'

const Business = () => {
  return (
    
    <div className={`${styles.paddingY} flex md:flex-row flex-col`}>
      <div  className={` flex-1 ${styles.flexStart}  flex-col  `}>
      <h2 className={`font-poppins   text-[40px] font-semibold text-white leading-[68px] w-full`}>
      You do the business <br /> We'll handle the money
    </h2>
    <p className={`${styles.paragraph} `}>
    With the right credit card, you can improve your financial life by building credit, earning
     rewards and saving money. But with hundreds of credit cards on the market.
    </p>
    <Button styles={`mt-10`} />
      </div>
      <div   className={`flex-1 flex ${styles.flexStart}  relative 
      absoulte ml-35 mt-10  flex flex-col w-full `}>
        {features.map((feature,index)=>(
          <div   key={feature.id} className={`flex flex-row ml-5   rounded-[20px]`}>
           <div  className={`  bg-dimBlue rounded-full mt-10 ml-10 h-[64px] w-[64px] ${styles.flexCenter}` }> 
           <img src={feature.icon} alt='feature' className={`absolute`} />
           </div>
            <div  className={`flex-1 flex-col ml-10 `}> 
            <h4 className={`font-poppins text-[18px] font-semibold text-white leading-[68px] w-full`}>{feature.title}</h4>
            <p  className={`font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px]`}>{feature.content}</p>

            </div>
            
             </div>
        ))}
      </div>



    </div>
  )
}

export default Business
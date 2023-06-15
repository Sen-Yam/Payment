import React from 'react'
import {feedback} from '../constants/index'
import {styles,layout} from '../style'
import { quotes } from "../assets";
const Feedback = () => {
  return (
    <div className={`${layout.section} mt-20`}>
        {feedback.map((feed,index)=>(
          <div key={feed.id} className={`${layout.sectionInfo} px-7 py-12 hover max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card   rounded-[20px]   max-w-[370px] `}>
          <img  src={quotes}  />
           <div className={` h-[50%] mt-10`}>
           <p className={`${styles.paragraph} text-white `}>{feed.content}</p>
             </div>
            <div className={`flex flex-row mt-3 ${styles.flexCenter}`}>
              <img src={feed.img} className={`mt-10 w-[30%] h-[60%]`} />
              <div className={`flex flex-col mt-10 ml-5 ${styles.flexStart}`}> 
                <p className={`font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] text-white`}>{feed.name}</p>
                <p className={`font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px]`}>{feed.title}</p>
              </div>
               </div>
          </div>
        ))}
         <div className={`absolute -left-1/2 flex-1 white__gradient rounded-full  z-[3]  top-0 w-[50%] h-[50%]`}/>
      <div className="absolute flex-1 ml-[90%] bottom-40 w-[100%] h-[100%]  blue__gradient" />
    </div>
  )
}

export default Feedback
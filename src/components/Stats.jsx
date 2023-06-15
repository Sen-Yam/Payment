import React from 'react'
import {stats} from '../constants/index'
import {styles} from '../style'
const Stats = () => {
  return (
    <div className={`flex flex-row flex-wrap text-white`}>
      
      {stats.map((stat,index)=>(
        <div key={stat.id} className={`flex  ${styles.flexCenter} `}>
        <h2  className={`font-poppins flex-1 text-[32px] font-semibold text-white leading-[75px  ]`}>{stat.value}</h2>
       <span className={`text-gradient ml-7 text-[20px] uppercase`}> {stat.title}</span>
       <div className={`bg-white w-[1px] h-[15px] ml-10 mr-10 ${index==stats.length-1?'hidden':'block'}`} />
        </div>
      ))}
  
    </div>
  )
}

export default Stats
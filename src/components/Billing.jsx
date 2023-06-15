import React from 'react'
import {apple,bill,google} from '../assets'
import {styles,layout} from '../style'
const Billing = () => {
  return (
    <div className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
      <img src={bill} alt='billing' className={`relative w-[100%] h-[100%]`} />

      <div className={`absolute -left-1/2 flex-1 white__gradient rounded-full  z-[3]  top-0 w-[50%] h-[50%]`}/>
      <div className="absolute flex-1 mr-[100%]   w-[100%] h-[100%]  blue__gradient" />
      </div>
      <div className={`${layout.sectionInfo} `}>
        <h2 className={`${styles.heading2} ml-20`}>Easily control your billing & invoicing</h2>
        <p className={`${styles.paragraph}  ml-20`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
         aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className={`flex flex-row flex-wrap mt-10 ml-20`}>
        <img src={apple} alt='apple' />
        <img className='ml-10' src={google} alt='google' />
        </div>
      </div>

    </div>
  )
}

export default Billing
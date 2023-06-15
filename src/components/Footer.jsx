import React from 'react'
import {styles} from '../style'
import {logo} from '../assets'
import {footerLinks,socialMedia} from '../constants/index'
const Footer = () => {
  return (
    <div className={`${styles.paddingY} ${styles.flexStart} flex flex-col`}>
      <div className={`flex md:flex-row flex-col  w-full`}>
<div className={` flex flex-col mb-[40%]  ${styles.flexStart}`}>
  <img src={logo} className={`h-[80%] w-[80%]`} />
  
  <div className={` mt-5 w-[90%]`}>
  <p className={`${styles.paragraph}  mt-5`}>
      a new way to make the payments easy, reliable and secure
    </p>
  
  </div>
</div>

<div className={`  w-full flex md:flex-row  flex-col justify-between mb-20  md:mt-0 mt-1 ${styles.flexStart}`}>

{footerLinks.map((footer,index1)=>( 
  <div key={index1} className={` md:mt-0 mt-10  ml-20 flex w-full flex-col ${styles.flexStart}`}> 
  <p className={`${styles.paragraph}  text-white`}>{footer.title}</p>
 <div className={`mt-5`}>
 {footer.links.map((link,index2)=>(
    <div className={`flex flec-col `}>
      <a href={link.link}> <p className={`${styles.paragraph} mt-3`}>{link.name}</p> </a>
       </div>
  ))}
   </div>
  </div>
))}

</div>

    </div>
    <div style={{marginTop:'-20%'}} className="w-full flex  justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className={`${styles.paragraph}`}>
        Copyright Ⓒ 2022 HooBank. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
    </div>
  )
}

export default Footer
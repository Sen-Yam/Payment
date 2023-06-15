import {React,useState} from 'react'
import {logo,menu,close} from '../assets'
import {navLinks} from '../constants/index'
const NavBar = () => {
  const [Toggle,setToggle] = useState(false)
  return (
    <nav
    className='w-full flex py-6 justify-between items-center navbar'>
      
      <img  src={logo} alt='HooBank' className='h-[32px] w-[124px]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1' >
      {navLinks.map((nav,index)=>(
        <li
        key={nav.id} className={`font-normal cursor-pointer text-[16px] text-white 
        ${index==navLinks.length-1? 'mr-0':'mr-10'}
        `}
        >
          <a
          href={`#${nav.id}`}
          >{nav.title}</a>

        </li>
      ))}
      </ul>
      <div className=' sm:hidden flex flex-1 justify-end items-center'>
        <img src={Toggle? close : menu}
        className='w-[28px] h-[28px] object-contain'
        onClick={()=>{setToggle((prev)=> !prev)}}
        />
        <div
        className={` rounded-xl ${Toggle? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2
        min-w-[140px]  sidebar`}
        >
              <ul className='list-none flex flex-col justify-end items-center flex-1 ' >
      {navLinks.map((nav,index)=>(
        <li
        key={nav.id} className={`font-normal cursor-pointer text-[16px] text-white 
        mb-4
        `}
        >
          <a
          href={`#${nav.id}`}
          >{nav.title}</a>

        </li>
      ))}
      </ul>
        </div>

      </div>
    </nav>
  )
}

export default NavBar
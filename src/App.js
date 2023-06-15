import React from 'react'
import {styles} from './style'
import { NavBar,Billing,CardDeal,Business, Clients,CTA,Stats,Footer,Testmonials,Hero} from './components'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden '>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth} ${styles.paddingX}`}>
      <NavBar/>
    </div>
      </div>
      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
      <Hero/>
    </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} ${styles.paddingX}`}>
      <Stats/>
      <Business/>
      <Billing/>
      <CardDeal/>
      <Testmonials/>
      <Clients/>
      <CTA/>
      <Footer/>
    </div>
      </div>
  </div>
  )
}

export default App
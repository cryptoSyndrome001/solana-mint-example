import React from 'react'
import Navbar from './Navbar/Navbar'
import classes from './header.module.css'

const Header = () => {
  return (
    <header id='header'>
      <Navbar />

      <div
        className={`${classes.intro} text-black`}
        style={{ fontFamily: ' Sora, sans-serif' }}
      >
        <div className={classes.container}>
          <div className={classes.pandaHeadingDiv}>
            <p style={{ color: 'white' }}>Example</p>
            <div className={classes.mintDiv}>
              <button>MINT</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

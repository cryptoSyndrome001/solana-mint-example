import React, { useState } from 'react'
import classes from './header.module.css'
import Timer from './Timer'
import { useWeb3React } from '@web3-react/core'
import { injected } from '../../Wallet/connectors'
const HeaderButtonSection = () => {
  const [connected, setConnected] = useState(false)
  const [counter, setCounter] = useState(1)

  const { active, account, library, connector, activate, deactivate } =
    useWeb3React()

  const handleClick = () => {
    setConnected(true)
  }

  const handleIncrement = () => {
    let temp = counter
    temp++
    setCounter(temp)
  }
  const handleDecrement = () => {
    if (counter > 1) {
      setCounter((prevCounter) => (prevCounter = prevCounter - 1))
    }
  }
  const connect = async () => {
    try {
      await activate(injected)
      console.log(account)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div id={classes.what} className={classes.headerButtonSection}>
      {!connected && (
        <div className={classes.connectDiv}>
          <button
            className='btn btn-custom btn-lg page-scroll buy-btn-de mt-8'
            onClick={handleClick}
          >
            Connect
          </button>
        </div>
      )}
      {!connected && (
        <div className='w-72 m-auto flex justify-center items-center gap-8'>
          <Timer />
        </div>
      )}
      {connected && (
        <div className='flex justify-center flex-col items-center gap-5'>
          <p className='text-3xl'>
            Total Cost: <span className='font-bold'>{counter * 5}</span>
          </p>
          <button
            onClick={connect}
            className='btn btn-custom btn-lg page-scroll buy-btn-de mt-8'
          >
            Mint
          </button>
          <div className='flex justify-center gap-8  items-center'>
            <button
              style={{ width: 'auto' }}
              className={classes.counterButton}
              onClick={handleDecrement}
            >
              -
            </button>
            <div className={classes.counter}>{counter}</div>
            <button
              style={{ width: 'auto' }}
              className={classes.counterButton}
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <p className='font-bold text-lg'>
            You can mint up to 50 ducks each time
          </p>
          {/* <button className="btn btn-custom btn-lg page-scroll buy-btn-de mt-8">Free Claim</button> */}
        </div>
      )}
    </div>
  )
}

export default HeaderButtonSection

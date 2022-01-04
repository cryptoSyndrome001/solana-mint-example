/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react'
import classes from './navbar.module.css'
import { Link } from 'react-scroll'
import MobileNavbar from './MobileNavbar'
import { useMediaQuery } from 'react-responsive'
import { WalletDialogButton } from '@solana/wallet-adapter-material-ui'
import { useAnchorWallet } from '@solana/wallet-adapter-react'

import styled from 'styled-components'
const Navbar = () => {
  // const [size, setSize] = useState(window.innerWidth)
  const ConnectButton = styled(WalletDialogButton)``
  const isMob = useMediaQuery({ query: '(max-width: 986px)' })
  const [connectwallettext, setconnectwallettext] = useState("Connect Wallet")
  const [isOpen, setIsOpen] = useState(false)
  const wallet = useAnchorWallet()
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  useEffect(() => {
    ; (async () => {
      if (wallet) {
        // const balance = await props.connection.getBalance(wallet.publicKey)
        // setBalance(balance / LAMPORTS_PER_SOL)
        setconnectwallettext("Connected")
      }
    })()
  }, [wallet])

  return (
    <>
      {isMob ? (
        <div className='block md:hidden'>
          <MobileNavbar isOpen={isOpen} toggleDrawer={toggleDrawer} connectwallettext={connectwallettext} />
        </div>
      ) : (
        <div className='hidden md:block'>
          <nav
            id='menu'
            className={`${classes.nav} navbar navbar-default flex items-center flex-wrap justify-between navbar-transparent`}
          >
            <a
              style={{ flexGrow: 1 }}
              className='navbar-brand text-center md:text-left page-scroll'
              href='#'
            >
              <img src='/logo.svg' className="logo" alt='' />
            </a>
            <ul
              className={`${classes.ulClass} nav navbar-nav navbar-right flex items-center justify-between `}
            >
              <li>
                <Link
                  activeClass='active'
                  to={'header'}
                  spy={true}
                  smooth={true}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass='active'
                  to={'expand'}
                  spy={true}
                  smooth={true}
                  offset={-96}
                >
                  Mint
                </Link>
              </li>

              <li>
                <Link
                  activeClass='active'
                  to={'roadmap'}
                  spy={true}
                  smooth={true}
                  offset={-96}
                >
                  Expand
                </Link>
              </li>
              <li>
                <Link
                  activeClass='active'
                  to={'faq'}
                  spy={true}
                  smooth={true}
                  offset={-96}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href='http://discord.com'
                  target='_blank'
                  rel='noreferrer'
                  className='page-scroll'
                >
                  <svg
                    width='34'
                    height='34'
                    viewBox='0 0 24 24'
                    fill='#fff'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10.076 11C10.676 11 11.162 11.45 11.151 12C11.151 12.55 10.677 13 10.076 13C9.486 13 9 12.55 9 12C9 11.45 9.475 11 10.076 11ZM13.924 11C14.525 11 15 11.45 15 12C15 12.55 14.525 13 13.924 13C13.334 13 12.849 12.55 12.849 12C12.849 11.45 13.323 11 13.924 11ZM18.891 2C20.054 2 21 2.966 21 4.163V23L18.789 21.005L17.544 19.829L16.227 18.579L16.773 20.522H5.109C3.946 20.522 3 19.556 3 18.359V4.163C3 2.966 3.946 2 5.109 2H18.89H18.891ZM14.921 15.713C17.194 15.64 18.069 14.117 18.069 14.117C18.069 10.736 16.587 7.995 16.587 7.995C15.107 6.862 13.697 6.893 13.697 6.893L13.553 7.061C15.302 7.607 16.114 8.395 16.114 8.395C15.1591 7.85699 14.1066 7.51434 13.018 7.387C12.3274 7.309 11.6299 7.31572 10.941 7.407C10.879 7.407 10.827 7.418 10.766 7.428C10.406 7.46 9.531 7.596 8.431 8.09C8.051 8.268 7.824 8.395 7.824 8.395C7.824 8.395 8.678 7.565 10.529 7.019L10.426 6.893C10.426 6.893 9.017 6.862 7.536 7.996C7.536 7.996 6.055 10.736 6.055 14.117C6.055 14.117 6.919 15.639 9.192 15.713C9.192 15.713 9.572 15.241 9.882 14.842C8.575 14.442 8.082 13.602 8.082 13.602C8.082 13.602 8.184 13.676 8.369 13.781C8.379 13.791 8.389 13.802 8.41 13.812C8.441 13.834 8.472 13.844 8.503 13.865C8.76 14.012 9.017 14.127 9.253 14.222C9.675 14.39 10.179 14.558 10.766 14.674C11.6453 14.8464 12.5494 14.8498 13.43 14.684C13.9429 14.5925 14.4433 14.4411 14.921 14.233C15.281 14.096 15.682 13.896 16.104 13.613C16.104 13.613 15.59 14.474 14.242 14.863C14.551 15.262 14.922 15.713 14.922 15.713H14.921Z'
                      fill='#fff'
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com'
                  target='_blank'
                  rel='noreferrer'
                  className={`${classes.mIcon} page-scroll`}
                >
                  <svg
                    width='34'
                    height='34'
                    viewBox='0 0 24 24'
                    fill='#fff'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M22.162 5.65599C21.3986 5.99368 20.589 6.21546 19.76 6.31399C20.6337 5.79142 21.2877 4.969 21.6 3.99999C20.78 4.48799 19.881 4.82999 18.944 5.01499C18.3146 4.34157 17.4804 3.89495 16.5709 3.74457C15.6615 3.59419 14.7279 3.74848 13.9153 4.18344C13.1026 4.6184 12.4564 5.30967 12.0771 6.14978C11.6978 6.98989 11.6067 7.93177 11.818 8.82899C10.1551 8.74564 8.52832 8.31351 7.04328 7.56065C5.55823 6.80779 4.24812 5.75104 3.19799 4.45899C2.82628 5.09744 2.63095 5.82321 2.63199 6.56199C2.63199 8.01199 3.36999 9.29299 4.49199 10.043C3.828 10.0221 3.17862 9.84277 2.59799 9.51999V9.57199C2.59819 10.5377 2.93236 11.4736 3.54384 12.221C4.15532 12.9685 5.00647 13.4815 5.95299 13.673C5.33661 13.84 4.6903 13.8646 4.06299 13.745C4.32986 14.5762 4.85 15.3032 5.55058 15.8241C6.25117 16.345 7.09712 16.6338 7.96999 16.65C7.10247 17.3313 6.10917 17.835 5.04687 18.1322C3.98458 18.4293 2.87412 18.5142 1.77899 18.382C3.69069 19.6114 5.91609 20.2641 8.18899 20.262C15.882 20.262 20.089 13.889 20.089 8.36199C20.089 8.18199 20.084 7.99999 20.076 7.82199C20.8949 7.23016 21.6016 6.49701 22.163 5.65699L22.162 5.65599Z'
                      fill='#fff'
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <ConnectButton style={{ justifyContent: "center" }} >{connectwallettext}</ConnectButton>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}

export default Navbar

import { useEffect, useState } from 'react'
import './App.css'
import * as anchor from '@project-serum/anchor'
import { useAnchorWallet } from '@solana/wallet-adapter-react'

import classes from './Example/Header/header.module.css'
import { Snackbar } from "@material-ui/core"
import Alert from "@material-ui/lab/Alert"
import artworks from './Assets/example nft.jpg'
import { Loader } from './Components/Loader'


import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken
} from './candy-machine'
import ScrollAnimation from 'react-animate-on-scroll'
import Roadmap from './Example/Roadmap/Roadmap'
import Faq from './Example/Faq/Faq'
export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey
  config: anchor.web3.PublicKey
  connection: anchor.web3.Connection
  startDate: number
  treasury: anchor.web3.PublicKey
  txTimeout: number
}

const Home = (props: HomeProps) => {

  const [itemsRedeemed, setItemsRedeemed] = useState(0)

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: '',
    severity: undefined,
  })

  const [isloadingConfetti, setIsLoadingConfetti] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const wallet = useAnchorWallet()
  const [candyMachine, setCandyMachine] = useState<CandyMachine>()

  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return

      const {
        candyMachine,
        itemsRedeemed
      } = await getCandyMachineState(
        wallet as anchor.Wallet,
        props.candyMachineId,
        props.connection
      )

      setItemsRedeemed(itemsRedeemed)

      setCandyMachine(candyMachine)
    })()
  }

  useEffect(() => {
    if (alertState.severity === "success") {
      setIsLoadingConfetti(true)
    }
  }, [alertState])

  useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    props.connection,
  ])

  return (
    <main>

      <Loader isActive={isProcessing} />


      <header id='header'>
        <div
          className={`${classes.intro} text-black`}
        >
          <div className={classes.container}>
            <div className={classes.pandaHeadingDiv}>
              <h1 className={classes.heroTitle}>
                <span>Citymine</span> is the first community built cryptocurrency mine.
              </h1>
              <p className={classes.heroContent}>
                Giving power back to the people…
              </p>
              <div className={classes.mintDiv}>
                {/* <Link 
                  to={'expand'}
                  activeClass='active'
                  spy={true}
                  smooth={true}
                >
                  <button type="button">Expand</button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <Expand /> */}
      <div id='expand' className={`${classes.what} text-center`}>
        <div className={classes.container}>
          <div className={classes.row}>
            <div className={classes.divText}>
              <div className={classes.aboutText}>

                <ScrollAnimation animateIn='fadeIn' animateOut='fadeIn'>
                  <h2 className="sub-title">Own a piece of the mining farm.</h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn' animateOut='fadeIn'>
                  <p className="content-text">
                    A cryptocurrency mining farm founded by 9,999 community members. Decentralizing a previously monopolized industry, and giving the crypto community a chance
                    to run, profit, and expand their own farm.
                  </p>
                </ScrollAnimation>
                <div className={classes.discord}>
                  <ScrollAnimation animateIn='fadeIn' animateOut='fadeIn'>
                    <h2 className="sub-title">NFT</h2>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn='fadeIn' animateOut='fadeIn'>
                    <p className="content-text">
                      Citymine NFT’s will give you access to the private discord, monthly passive income, airdrops and presale to future projects. 100% of mined profits will be
                      sent to NFT holders, address monthly.
                    </p>
                  </ScrollAnimation>
                  <div className={classes.mintDiv}>
                    {wallet && <h4 className="minted-text">Minted: <span className="minted-text-n">{itemsRedeemed}</span><span className="minted-text-t">/2222</span></h4>}
                    <button type="button" className="mint-button" onClick={onMint}>Mint</button>
                  </div>
                  {/* {isloadingConfetti ? <Confetti/> : ''} */}
                </div>
              </div>
            </div>
            <div className={classes.pandaImg}>
              <img src={artworks} className='img-responsive mx-auto' alt='' />
            </div>
          </div>
        </div>
      </div>
      <Roadmap />
      <Faq />

    </main >
  )
}

interface AlertState {
  open: boolean
  message: string
  severity: 'success' | 'info' | 'warning' | 'error' | undefined
}

export default Home

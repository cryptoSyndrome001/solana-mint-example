import classes from './roadmap.module.css'
import faq1 from '../../Assets/faq1.jpg'
import faq2 from '../../Assets/faq2.jpg'
import faq3 from '../../Assets/faq3.jpg'
import faq4 from '../../Assets/faq4.jpg'
import faq5 from '../../Assets/faq5.jpg'
import ScrollAnimation from 'react-animate-on-scroll'

const Roadmap = () => {
  return (
    <div id="roadmap" className={classes.roadMapContainer}>
      <ScrollAnimation animateIn="fadeIn">
        <div className={classes.roadMapDiv}>
          <div></div>
          <h1 className={classes.roadmapTitle}>Expand</h1>
          <div></div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn='flipInX' animateOut='flipOutY'>

        <div className={`${classes.roadmapStep} `}>
          <div className={`${classes.colmd5} ${classes.textSection}`}>
            <span>
              <h3>NFT</h3>
              <span>
                A 9,999 member crypto-coin mining farm built by the community. Decentralizing a previously monopolized industry and giving the crypto community a chance to own, profit from and grow its own farm.

              </span>
            </span>
          </div>
          <div className={`${classes.colmd5} ${classes.imageSection}`}>
            <img src={faq1} className={classes.roadmapImg} alt="" />
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>
        <div className={`${classes.roadmapStep} ${classes.colReverse}`}>
          <div className={`${classes.colmd5}  ${classes.imageSection}`}>
            <img src={faq2} className={classes.roadmapImg} alt="" />
          </div>
          <div className={`${classes.colmd5} ${classes.textSection}`}>
            <span>
              <h3>Cryptocurrency Mining</h3>
              <span>
                Cryptomining is the physical component of cryptocurrency. It’s not just a necessary component of crypto, but the base itself. Countries like China, Russia, and large corporate companies are all looking to take over the cryptocurrency mining industry. As more big money invests in crypto mining, the entry price goes up.In order to keep cryptocurrency in people’s hands, we need to decentralize mining.

              </span>
            </span>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn='flipInX' animateOut='flipOutY'>
        <div className={`${classes.roadmapStep}`}>
          <div className={`${classes.colmd5} ${classes.textSection}`}>
            <span>
              <h3>Ethereum</h3>
              <span>
                Ethereum is the most profitable cryptocurrency among the large ones right now.  A good ethereum miner rig should return close to 100% of its investment in a year.  The biggest factor when it comes to cryptocurrency mining is the electricity costs. At 10 cents per kilowatt, ethereum miner rigs will be making about 90% of their investment back in a year. If you can get cheaper electricity, that just makes its way straight into your profits.
              </span>
            </span>
          </div>
          <div className={`${classes.colmd5} ${classes.imageSection}`}>
            <img src={faq3} className={classes.roadmapImg} alt="" />
          </div>

        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>
        <div className={`${classes.roadmapStep} ${classes.colReverse}`}>
          <div className={`${classes.colmd5} ${classes.imageSection}`}>
            <img src={faq4} className={classes.roadmapImg} alt="" />
          </div>
          <div className={`${classes.colmd5} ${classes.textSection}`}>
            <span>
              <h3>Location</h3>
              <span>
                Iceland, 100% of electricity in Iceland comes from renewable sources and the country is embracing geothermal power. Electricity costs for businesses in Iceland are .05 cents per kilowatt, which is drastically lower than the global average of 12.87 cents per kilowatt. Weather is cool throughout the year, which helps keep the gear connected and running 24/7.
              </span>
            </span>
          </div>

        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn='flipInX' animateOut='flipOutY'>
        <div className={`${classes.roadmapStep}`}>
          <div className={`${classes.colmd5} ${classes.textSection}`}>
            <span>
              <h3>
                Passive Income
              </h3>
              <span>
                NFT holders will receive 75% of profits from the miner farm straight to their wallet every month, while the other 25% will be continuously invested in mining hardware. So over time your passive income will increase. The only goal of the project is to pay out ridiculous amounts of money to NFT holders, and continue developing the project because it’s awesome.

              </span>
            </span>
          </div>
          <div className={`${classes.colmd5} ${classes.imageSection}`}>
            <img src={faq5} className={classes.roadmapImg} alt="" />
          </div>
        </div>
      </ScrollAnimation>

    </div>
  )
}

export default Roadmap

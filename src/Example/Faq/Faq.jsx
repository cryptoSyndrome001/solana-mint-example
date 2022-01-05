import classes from './faq.module.css'
import 'react-accessible-accordion/dist/fancy-example.css'

import faq1 from '../../Assets/faq1.jpg'
import faq2 from '../../Assets/faq2.jpg'
import faq3 from '../../Assets/faq3.jpg'
import faq4 from '../../Assets/faq4.jpg'
import faq5 from '../../Assets/faq5.jpg'
import ScrollAnimation from 'react-animate-on-scroll'

const Faq = () => {
  return (
    <>
      <div id="faq">
        <div className={classes.bgBlack}>
          <div className={classes.faq}>
            <div>
              <h1 className={classes.faqTitle}>F.A.Q</h1>
              <hr />
              <div className={`${classes.row} ${classes.firstFaq}`}>
                <div className={`${classes.colmd9} ${classes.colsm12}`}>
                  <ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>
                    <div className={`${classes.faqItem}`}>
                      <h3 className={`${classes.tAlignCenter}`}>How do I get involved?</h3>
                      <p>
                        Follow our Twitter, join our Discord, and be part of our community through the NFT launch. We have many interesting discussions happening around future projects, crypto mining, alpha leaks, and more.
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>

              </div>
              <div className={`${classes.row} ${classes.faqContent} `}>
                <div className={`${classes.colmd5} ${classes.colsm12}`}>
                  <ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutLeft'>
                    <div className={`${classes.faqItem}`}>
                      <h3>Why Texas?</h3>
                      <p>A major component to the profitability of crypto mining is electricity costs. Texas has some of the most competitive
                        rates in all of America, which means more passive income for you.</p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutLeft'>

                    <div className={`${classes.faqItem}`}>
                      <h3> Why crypto mining?</h3>
                      <p>
                        Cryptocurrency mining is the physical part of cryptocurrency. It is not only a necessary part of crypto, but the base itself. Countries like China, Russia, and huge corporations are taking over the cryptocurrency mining industry. As more big money invests in crypto mining, the cost of entry goes up as well. In order to keep cryptocurrency in the peoples hands we need to decentralize mining.
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className={`${classes.colmd5}  ${classes.colsm12}`}>
                  <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutRight'>
                    <div className={`${classes.faqItem}`}>
                      <h3>Ownership?</h3>
                      <p>
                        The project will be jointly owned by the NFT holders. NFT holders will receive 100% of mined funds through monthly airdrops to their wallets. The founders will receive presale access as we continue to grow.
                      </p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutRight'>

                    <div className={`${classes.faqItem}`}>
                      <h3>What amount of NFT sales will be used to build the mining farm?</h3>
                      <p>
                        100% of the funds will be allocated to the project. 75% will go into the mining farm itself which leaves 25% for future development, maintenance, and backup funds.
                      </p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutRight'>

                    <div className={`${classes.faqItem}`}>
                      <h3>What cryptocurrency will we be mining?</h3>
                      <p>
                        Examples’ main focus will be BTC/ETH, but we will have discussions about other lucrative opportunities.
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Faq

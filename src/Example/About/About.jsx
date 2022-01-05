import React from 'react'
import classes from './about.module.css'
import openSea from '../../Assets/opensea.png'
const About = () => {
  return (
    <div className={classes.about}>
      <div className='container'>
        <div className='row'></div>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <img
              src='https://soltopia.io/img/where-can-i-buy.png'
              className='img-responsive bears'
              alt=''
            />
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text  text-center mt-8'>
              <h2 className='font-bold text-6xl mb-8 col-span-2 text-white'>
                Where can I buy?
              </h2>
              <div className='flex flex-wrap justify-center gap-10 md:gap-0 '>
                <div className='col-md-6 col-sm-6 col-xs-12'>
                  <div className='flex justify-center items-center gap-3 text-center'>
                    <div className='rounded-full'>
                      <img
                        style={{ borderRadius: '100%', padding: '10px' }}
                        src={openSea}
                        alt=''
                        width='80px'
                      />
                    </div>{' '}
                  </div>
                  {/* <img src="https://soltopia.io/img/de-logo.png" className="img-responsive de" alt="" /> */}
                  <a
                    href='https://opensea.io/'
                    target='_blank'
                    rel='noreferrer'
                    className='btn btn-custom btn-lg page-scroll buy-btn-de mt-8'
                  >
                    Buy On OpenSea
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

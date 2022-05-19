import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <h3>A Creative company of Breads and Bites</h3>
          <p>breadscode@gmail.com</p>
          <p className='city'>Peru, Lima</p>
          <span className='phone-number'>+1-800-555-5555</span>
          <span className='phone-number'>+51 98765432</span>
        </div>
        <div className='footer-content-right'>
          <h3>Follow Us</h3>
          <div className='icons'>
            <a
              href='https://www.facebook.com/breadscode/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FacebookLogo size={32} weight='bold' />
            </a>
            <a
              href='https://www.instagram.com/breadscode/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <TwitterLogo size={32} weight='bold' />
            </a>
            <a
              href='https://twitter.com/breadscode'
              target='_blank'
              rel='noopener noreferrer'
            >
              <InstagramLogo size={32} weight='bold' />
            </a>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <p>Copyright © 2022</p>
      </div>
    </footer>
  )
}

export default Footer

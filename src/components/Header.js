import React from 'react'
import logo from '../assets/coincap.png'
import {FaSearch} from 'react-icons/fa'
import {FcSettings} from 'react-icons/fc'
import '../styles/header.css'

const Header = () => {
  return (
    <header className='navbar'>
      <div>
        <p>Coins</p>
        <p>Exchanges</p>
        <p>Swap</p>
      </div>
      <div>
        <img className='h-10 w-20' src={logo} alt='logo'/>
      </div>
      
      <div>
      <p><FaSearch/></p>
      <p><FcSettings/></p>
      <button className='btn-primary'>Connect Wallet</button>
      </div>
    </header>
  )
}

export default Header
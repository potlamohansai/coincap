import React from 'react'
import '../styles/backdiv.css'

const Backdiv = () => {
  return (
    <div style={{background:'linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246))',height:'35vh'}}>
      <div className='items'>
        <div>
          <h1>MARKET CAP</h1>
          <h1>$1.04T</h1>
        </div>
        <div>
          <h1>EXCHANGE VOL</h1>
          <h1>$42.28B</h1>
        </div>
        <div>
          <h1>ASSETS</h1>
          <h1>2,295</h1>
        </div>
        <div>
          <h1>EXCHANGES</h1>
          <h1>73</h1>
        </div>
        <div>
          <h1>MARKETS</h1>
          <h1>12,563</h1>
        </div>
        <div>
          <h1>BTC DOM INDEX</h1>
          <h1>33.5%</h1>
        </div>
      </div>
    </div>
  )
}

export default Backdiv
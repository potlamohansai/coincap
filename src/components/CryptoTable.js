import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/cryptotable.css'
// import { useDispatch } from 'react-redux'
// import fetchData from '../actions'
// import { connect } from 'react-redux';

const CryptoTable = () => {
  const [coins, setCoins] = useState([])
  const [limit, setLimit] = useState(50)


  useEffect(()=> {
    const fetchCoins = async () => {
      const res = await axios.get(`https://api.coincap.io/v2/assets?limit=${limit}`);
      const {data} = res.data;
      console.log(data);
      setCoins(data)
    }
    fetchCoins()
  },[limit])


  // const dispatch = useDispatch();

  // useEffect(()=> {
      
  //     setCoins(()=> {
  //       dispatch(fetchData())
  //     })
  //     },[])

  

  return (
    <>
      <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Price</th>
          <th>MarketCap</th>
          <th>VWAP(24Hr)</th>
          <th>Supply</th>
          <th>Volume(24Hr)</th>
          <th>Change(24Hr)</th>
        </tr>
      </thead>
      <tbody>
        {coins.map(({id,rank,name,symbol,priceUsd, marketCapUsd, vwap24Hr,maxSupply,volumeUsd24Hr,changePercent24Hr}) => (
          <tr key={id}>
          <td>{rank}</td>
          <td className='name'>
            <div>
              <img src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`} alt='' />
            </div>
            <div>
              <h1 style={{fontWeight:'800'}}>{name}</h1>
                {symbol}
            </div>
          </td>
          <td>${parseFloat(priceUsd).toFixed(2)}</td>
          <td>${parseFloat(marketCapUsd/1.0e+9).toFixed(2)}b</td>
          <td>${parseFloat(vwap24Hr).toFixed(2)}</td>
          <td>{parseFloat(maxSupply/1.0e+6).toFixed(2)}m</td>
          <td>${parseFloat(volumeUsd24Hr/1.0e+6).toFixed(2)}m</td>
          <td>{parseFloat(changePercent24Hr).toFixed(2)}%</td>
        </tr>
        ))}
      </tbody>
    </table>
    <div className='buttons'>
          <button className='btn-primary' onClick={()=> setLimit(limit+50)}>View More</button>
          <button className='btn-primary' onClick={()=> setLimit(50)}>Refresh</button>
    </div>
    
    </>
  )
}

// const mapStateToProps = state => {
//   return {
//     data: state.data
//   };
// };

// const mapDispatchToProps = {
//    fetchData
// };

export default CryptoTable
// export default connect(mapStateToProps,mapDispatchToProps)(CryptoTable);
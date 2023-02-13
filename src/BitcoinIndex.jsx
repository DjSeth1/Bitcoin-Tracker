import React, { useEffect, useState } from 'react'

const BitcoinIndex = ({ currency ="AUD" }) => {
    let [price, setPrice] = useState(0)


    //Mount and currency change. 
    useEffect(() => {
        fetch(`http://api.coindesk.com/v1/bpi/currentprice/${currency}.json`)
            .then(res => res.json())
            .then(data => setPrice(data.bpi[currency].rate_float))
    }, [currency])

 
        return (
        <>
            <h1>Bitcoin Index</h1>
            <h3>Current Price: {currency} {price}</h3>
        </>
  )
}

export default BitcoinIndex
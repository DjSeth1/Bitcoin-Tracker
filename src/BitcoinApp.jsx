import React from 'react'
import BitcoinIndex from './BitcoinIndex'
import CurrencySelector from './CurrencySelector'

const BitcoinApp = () => {
    const [currency, setCurrency] = useState("AUD")

    return (
        <>
            <BitcoinIndex currency = {currency} />
            <CurrencySelector currency = {currency} setCurrency = {setCurrency} />
        </>
  )
}

export default BitcoinApp
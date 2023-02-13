import React, { useEffect, useState } from 'react'

const CurrencySelector = ({currency, setCurrency}) => {
    let [currencies, setCurrencies] = useState([])


    useEffect(() => {
        fetch('https://justcors.com/tl_94c41d8/http://api.coindesk.com/v1/bpi/supported-currencies.json')
            .then(res => res.json())
            .then(data => setCurrencies(data))
    }, [])


    return (
        <select onChange={evt => setCurrency(evt.target.value)} value={currency}> 
            {currencies.map(currency => <option key= {currency.currency} value={currency.currency}>{currency.country}</option>)}
        </select>
    )
}

export default CurrencySelector
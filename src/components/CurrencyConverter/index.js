import { useCallback, useEffect, useMemo, useState } from 'react'
import './index.css'
import { useCurrency } from '../../hooks/useCurrency'
// import api from '../../services/api'
import { allCurrencies } from '../../services/currencies'
import invert from '../../assets/invert.png'
import SelectInput from '../SelectInput'


function CurrencyConverter() {
  const { currencyFrom, setCurrencyFrom, currencyTo, setCurrencyTo } = useCurrency()
  const [currencies, setCurrencies] = useState([])
  const [amount, setAmount] = useState(1)
  const [result, setResult] = useState(Number)
  
  const handleCurrencyFromChange = useCallback((newValue) => {
    return setCurrencyFrom(newValue.value)
  }, [])

  const handleCurrencyToChange = useCallback((newValue) => {
    return setCurrencyTo(newValue.value)
  }, [])

  function invertCurrencies() {
    const aux = currencyFrom
    setCurrencyFrom(currencyTo)
    setCurrencyTo(aux)
  }


  const setInitialValueFrom = useMemo(() => {
    return currencies.filter(currency => currency.value === currencyFrom)[0]
  }, [currencyFrom, currencies])

  const setInitialValueTo = useMemo(() => {
    return currencies.filter(currency => currency.value === currencyTo)[0]
  }, [currencyTo, currencies])

  useEffect(() => {
    const arrayCurrencies = []

    for (let currency in allCurrencies) {
      const newObject = { value: currency, label: `${currency} - ${allCurrencies[currency]}`}
      arrayCurrencies.push(newObject)
    }

    setCurrencies(arrayCurrencies)


    // api.get('symbols').then((response) => {
    //   const allCurrencies = response.data.symbols
    //   const arrayCurrencies = []

    //   for (let currency in allCurrencies) {
    //     const newObject = { value: currency, label: `${currency} - ${allCurrencies[currency]}`}
    //     arrayCurrencies.push(newObject)
    //   }

    //   setCurrencies(arrayCurrencies)
    // })
  }, [])


  useEffect(() => {
    setAmount(1)
    setResult(5.30)

    // api.get(`convert?from=${currencyFrom}&to=${currencyTo}&amount=${amount}`).then((response) => {
    //   setAmount(response.data.query.amount)
    //   setResult(response.data.result)
    // })
  }, [amount, currencyFrom, currencyTo])

  return (
    <div className='container-converter'>
      <div className='container-select'>
        <div className='select-from'>
          <SelectInput options={currencies} value={setInitialValueFrom} onChange={handleCurrencyFromChange} />
          <div className='container-input'>
            <input className='input-currency' value={amount} onChange={(e) => setAmount(e.target.value)} />
          </div>
        </div>
        <div className='invert-currencies'>
          <img className='invert-img' onClick={invertCurrencies} width={24} height={24} src={invert} alt="Invert Currencies Button" />
        </div>
        <div className='select-to'>
          <SelectInput options={currencies} value={setInitialValueTo} onChange={handleCurrencyToChange} />
          <div className='container-input'>
            <input className='input-currency' value={result} onChange={(e) => setResult(e.target.value)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrencyConverter

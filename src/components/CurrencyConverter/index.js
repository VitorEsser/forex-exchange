import { useEffect, useState } from 'react'
import './index.css'
// import api from '../../services/api'
import { allCurrencies } from '../../services/currencies'
import invert from '../../assets/invert.png'
import Select from 'react-select';


function CurrencyConverter() {
  const [currencies, setCurrencies] = useState([])

  const [rate, setRate] = useState(0)
  const [result, setResult] = useState(0)

  useEffect(() => {
    setRate(5.274182)
    setResult(527.4182)

    const arrayCurrencies = []
      for (let currency in allCurrencies) {
        const newObject = { value: currency, label: `${currency} - ${allCurrencies[currency]}`}
        arrayCurrencies.push(newObject)
      }

    setCurrencies(arrayCurrencies)

    // api.get('symbols').then((response) => {
    //   console.log(response.data)
    // })

    // api.get(`convert?from=${'EUR'}&to=${'BRL'}&amount=${'100'}`).then((response) => {
    //   setRate(response.data.info.rate)
    //   setResult(response.data.result)
    // });
  }, [])

  return (
    <div className='container-converter'>
      <div className='container-select'>
        <div className='select-from'>
          <Select
            className='select-currency'
            options={currencies}
            styles={{
              control: (provided) => ({
                ...provided,
                width: '100%',
              }),
              input: (provided) => ({
                ...provided,
                width: '100%',
                height: '8vh',
              }),
            }}
          />
          <div className='container-input'>
            <input className='input-currency' />
          </div>
        </div>
        <div className='invert_currencies'>
          <img width={24} height={24} src={invert} alt="Invert Currencies Button" />
        </div>
        <div className='select-to'>
          <Select 
            className='select-currency'
            options={currencies}
            styles={{
              control: (provided) => ({
                ...provided,
                width: '100%',
              }),
              input: (provided) => ({
                ...provided,
                width: '100%',
                height: '8vh',
              }),
            }}
          />
          <div className='container-input'>
            <input className='input-currency' />
          </div>
        </div>
      </div>


      <h2>Rate: {Math.floor(rate * 100) / 100}</h2>
      <h2>Resultado: {result.toFixed(2)}</h2>
    </div>
  );
}

export default CurrencyConverter

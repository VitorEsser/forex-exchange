import React, { useState, createContext } from 'react'

export const CurrencyContext = createContext()

export const CurrencyContextProvider = ({ children }) => {
  const [currencyFrom, setCurrencyFrom] = useState('EUR')
  const [currencyTo, setCurrencyTo] = useState('USD')

  return (
    <CurrencyContext.Provider value={{ currencyFrom, setCurrencyFrom, currencyTo, setCurrencyTo }}>
      {children}
    </CurrencyContext.Provider>
  )
}

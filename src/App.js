import './App.css'
import { CurrencyContextProvider } from './context/CurrencyContext'
import CurrencyConverter from './components/CurrencyConverter'
import HistoricalRate from './components/HistoricalRate'
import Menu from './components/Menu'

function App() {
  return (
    <CurrencyContextProvider>
      <div className="App">
        <Menu />
        <div className="page-container">
          <h1 className="title">Currency Converter</h1>
          <div className="grid-container">
            <CurrencyConverter />
            <HistoricalRate />
          </div>
        </div>
      </div>
    </CurrencyContextProvider>
  )
}

export default App

import './App.css'
import CurrencyConverter from './components/CurrencyConverter'
import HistoricalRate from './components/HistoricalRate'

function App() {
  return (
    <div className="App">
      <h1 className="title">Currency Converter</h1>
      <div className="grid-container">
        <CurrencyConverter />
        <HistoricalRate />
      </div>
    </div>
  )
}

export default App

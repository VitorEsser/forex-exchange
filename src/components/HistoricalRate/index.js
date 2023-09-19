import { useEffect, useState, useMemo } from "react"
import './index.css'
import { useCurrency } from '../../hooks/useCurrency'
import api from '../../services/api'
import { getDates, formatDateToChart } from '../../services/date'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";


Chart.register(CategoryScale);

function HistoricalRate() {
  const { currencyFrom, currencyTo } = useCurrency()
  const [historical, setHistorical] = useState([])

  // const historical = [
  //   {day: 'Aug 18', rate: 5.411892},
  //   {day: 'Aug 19', rate: 5.405087},
  //   {day: 'Aug 20', rate: 5.403285},
  //   {day: 'Aug 21', rate: 5.427402},
  //   {day: 'Aug 22', rate: 5.356661},
  //   {day: 'Aug 23', rate: 5.276875},
  //   {day: 'Aug 24', rate: 5.269396}
  // ]

  useEffect(() => {
    const dates = getDates()

    api.get(`timeseries?base=${currencyFrom}&symbols=${currencyTo}&start_date=${dates[0]}&end_date=${dates[1]}`).then((response) => {
      let rates = response.data.rates
      const arrayHistorical = []
      for (let rate in rates) {
        const newObject = {day: formatDateToChart(rate), rate: rates[rate][currencyTo]}
        arrayHistorical.push(newObject)
      }

      setHistorical(arrayHistorical)
    });
  }, [currencyFrom, currencyTo])

  const chartData = useMemo(() => {
    return {
      labels: historical.map((data) => data.day), 
      datasets: [
        {
          label: "Rate",
          data: historical.map((data) => data.rate),
          backgroundColor: "white",
          borderColor: "black",
          borderWidth: 2
        }
      ]
    }
  }, [historical])

  return (
    <div className='container-historical'>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text:`Weekly Historical Rates`
            },
            legend: {
              display: false
            }
          },
          maintainAspectRatio: false,
          responsive: true,
        }}
      />
    </div>
  )
}

export default HistoricalRate
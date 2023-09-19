import { useContext } from "react"
import { CurrencyContext } from "../context/CurrencyContext"

export function useCurrency() {
  const context = useContext(CurrencyContext)
  return context
}

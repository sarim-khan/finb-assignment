import { ArrowDown, ArrowUp, DollarSign, Percent } from "lucide-react"

interface FinancialCardProps {
  title: string
  value: number
  percentageChange?: number
  isCurrency?: boolean
  isPercentage?: boolean
}

const FinancialCard = ({
  title,
  value,
  percentageChange,
  isCurrency = true,
  isPercentage = false,
}: FinancialCardProps) => {
  const formattedValue = isCurrency
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      }).format(value)
    : isPercentage
      ? `${value}%`
      : value.toLocaleString()

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
        {isCurrency && <DollarSign className="h-5 w-5 text-gray-400 dark:text-gray-500" />}
        {isPercentage && <Percent className="h-5 w-5 text-gray-400 dark:text-gray-500" />}
      </div>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">{formattedValue}</p>
        {percentageChange !== undefined && (
          <span
            className={`ml-2 text-sm font-medium flex items-center ${
              percentageChange >= 0 ? "text-green-600 dark:text-green-500" : "text-red-600 dark:text-red-500"
            }`}
          >
            {percentageChange >= 0 ? <ArrowUp className="h-3 w-3 mr-0.5" /> : <ArrowDown className="h-3 w-3 mr-0.5" />}
            {Math.abs(percentageChange)}%
          </span>
        )}
      </div>
    </div>
  )
}

export default FinancialCard

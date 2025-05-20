"use client"

import { useState, useEffect } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { useTimeframe } from "../context/TimeframeContext"
import { financialData } from "../data/financialData"

const IncomeExpenseChart = () => {
  const { timeframe } = useTimeframe()
  const [chartData, setChartData] = useState(financialData.monthly)

  useEffect(() => {
    switch (timeframe) {
      case "monthly":
        setChartData(financialData.monthly)
        break
      case "quarterly":
        setChartData(financialData.quarterly)
        break
      case "yearly":
        setChartData(financialData.yearly)
        break
      default:
        setChartData(financialData.monthly)
    }
  }, [timeframe])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-base font-medium text-gray-900 dark:text-white mb-4">Income vs Expenses</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#9ca3af" tick={{ fill: "#9ca3af" }} />
            <YAxis stroke="#9ca3af" tick={{ fill: "#9ca3af" }} tickFormatter={formatCurrency} />
            <Tooltip
              formatter={(value) => [formatCurrency(value as number), ""]}
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderColor: "#e5e7eb",
                borderRadius: "0.375rem",
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#3b82f6"
              strokeWidth={2}
              activeDot={{ r: 8 }}
              name="Income"
            />
            <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} name="Expenses" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default IncomeExpenseChart

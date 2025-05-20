"use client"

import { useTimeframe } from "../context/TimeframeContext"

const TimeframeToggle = () => {
  const { timeframe, setTimeframe } = useTimeframe()

  return (
    <div className="flex p-1 space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
      <button
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
          timeframe === "monthly"
            ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow"
            : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        }`}
        onClick={() => setTimeframe("monthly")}
      >
        Monthly
      </button>
      <button
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
          timeframe === "quarterly"
            ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow"
            : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        }`}
        onClick={() => setTimeframe("quarterly")}
      >
        Quarterly
      </button>
      <button
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
          timeframe === "yearly"
            ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow"
            : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        }`}
        onClick={() => setTimeframe("yearly")}
      >
        Year-to-date
      </button>
    </div>
  )
}

export default TimeframeToggle

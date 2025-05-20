"use client"

import { useEffect } from "react"
import IncomeExpenseChart from "../components/IncomeExpenseChart"
import SpendingCategoryChart from "../components/SpendingCategoryChart"
import TimeframeToggle from "../components/TimeframeToggle"

const Reports = () => {
  useEffect(() => {
    document.title = "Reports | FinDash"
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reports</h1>
        <TimeframeToggle />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <IncomeExpenseChart />
        <SpendingCategoryChart />
      </div>
    </div>
  )
}

export default Reports

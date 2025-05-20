"use client"

import { useEffect } from "react"
import FinancialCard from "../components/FinancialCard"
import IncomeExpenseChart from "../components/IncomeExpenseChart"
import SpendingCategoryChart from "../components/SpendingCategoryChart"
import TransactionsTable from "../components/TransactionsTable"
import TimeframeToggle from "../components/TimeframeToggle"
import SavingsGoalCard from "../components/SavingsGoalCard"
import NotificationsCard from "../components/NotificationsCard"
import { useTimeframe } from "../context/TimeframeContext"
import { financialSummary } from "../data/financialSummary"

const Dashboard = () => {
  const { timeframe } = useTimeframe()
  const summary = financialSummary[timeframe]

  useEffect(() => {
    document.title = "Dashboard | FinDash"
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <TimeframeToggle />
      </div>

      {/* Savings Goal */}
      <SavingsGoalCard />

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <FinancialCard title="Total Account Balance" value={summary.balance} percentageChange={summary.balanceChange} />
        <FinancialCard title="Monthly Income" value={summary.income} percentageChange={summary.incomeChange} />
        <FinancialCard title="Monthly Expenses" value={summary.expenses} percentageChange={summary.expensesChange} />
        <FinancialCard
          title="Savings Ratio"
          value={summary.savingsRatio}
          percentageChange={summary.savingsRatioChange}
          isCurrency={false}
          isPercentage={true}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <IncomeExpenseChart />
        <SpendingCategoryChart />
      </div>

      {/* Notifications & Tips */}
      <NotificationsCard />

      {/* Recent Transactions */}
      <TransactionsTable />
    </div>
  )
}

export default Dashboard

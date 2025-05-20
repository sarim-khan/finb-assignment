"use client"

import { useEffect } from "react"
import TransactionsTable from "../components/TransactionsTable"

const Transactions = () => {
  useEffect(() => {
    document.title = "Transactions | FinDash"
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Transactions</h1>
      </div>
      <TransactionsTable />
    </div>
  )
}

export default Transactions

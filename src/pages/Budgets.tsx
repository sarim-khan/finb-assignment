"use client"

import { useEffect } from "react"
import { StepForwardIcon as Progress } from "lucide-react"
import { budgets } from "../data/budgets"

const Budgets = () => {
  useEffect(() => {
    document.title = "Budgets | FinDash"
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Budgets</h1>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Monthly Budget by Category</h2>
        <div className="space-y-6">
          {budgets.map((budget) => {
            const percentage = (budget.spent / budget.limit) * 100
            const isOverBudget = percentage > 100

            return (
              <div key={budget.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{budget.category}</span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    ${budget.spent.toLocaleString()} / ${budget.limit.toLocaleString()}
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${
                      isOverBudget
                        ? "bg-red-600 dark:bg-red-500"
                        : percentage > 80
                          ? "bg-yellow-400 dark:bg-yellow-500"
                          : "bg-green-500 dark:bg-green-600"
                    }`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  ></div>
                </div>
                {isOverBudget && (
                  <p className="text-xs text-red-600 dark:text-red-500 flex items-center">
                    <Progress className="h-3 w-3 mr-1" />
                    You've exceeded your budget by ${(budget.spent - budget.limit).toLocaleString()}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Budgets

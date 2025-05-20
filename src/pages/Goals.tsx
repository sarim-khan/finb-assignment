"use client"

import { useEffect } from "react"
import { Target, TrendingUp, Clock } from "lucide-react"
import { goals } from "../data/goals"

const Goals = () => {
  useEffect(() => {
    document.title = "Goals | FinDash"
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Financial Goals</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.map((goal) => {
          const progress = (goal.currentAmount / goal.targetAmount) * 100

          return (
            <div
              key={goal.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-primary bg-opacity-10">
                  {goal.type === "savings" ? (
                    <Target className="h-6 w-6 text-primary" />
                  ) : goal.type === "investment" ? (
                    <TrendingUp className="h-6 w-6 text-primary" />
                  ) : (
                    <Clock className="h-6 w-6 text-primary" />
                  )}
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-medium text-gray-900 dark:text-white">{goal.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Target: ${goal.targetAmount.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">${goal.currentAmount.toLocaleString()}</span>
                  <span className="text-gray-500 dark:text-gray-400">${goal.targetAmount.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: `${Math.min(progress, 100)}%` }}></div>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500 dark:text-gray-400">{Math.round(progress)}% complete</span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {goal.targetDate ? `Target: ${new Date(goal.targetDate).toLocaleDateString()}` : "Ongoing"}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Goals

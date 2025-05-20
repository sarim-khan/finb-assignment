import { userData } from "../data/userData"

const SavingsGoalCard = () => {
  const { savingsGoal, currentSavings } = userData
  const progress = (currentSavings / savingsGoal) * 100
  const formattedGoal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(savingsGoal)
  const formattedCurrent = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(currentSavings)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Monthly Savings Goal</h3>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {formattedCurrent} / {formattedGoal}
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${Math.min(progress, 100)}%` }}></div>
      </div>
      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        {progress >= 100 ? (
          <span className="text-green-600 dark:text-green-500">Goal reached! 🎉</span>
        ) : (
          <span>{Math.round(progress)}% of monthly goal</span>
        )}
      </div>
    </div>
  )
}

export default SavingsGoalCard

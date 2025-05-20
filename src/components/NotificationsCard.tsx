import { AlertTriangle, TrendingUp, DollarSign, CreditCard } from "lucide-react"
import { notifications } from "../data/notifications"

const NotificationsCard = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "alert":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />
      case "tip":
        return <TrendingUp className="h-5 w-5 text-green-500" />
      case "budget":
        return <DollarSign className="h-5 w-5 text-blue-500" />
      default:
        return <CreditCard className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-base font-medium text-gray-900 dark:text-white mb-4">Notifications & Tips</h3>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-start p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
            <div className="flex-shrink-0">{getIcon(notification.type)}</div>
            <div className="ml-3">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">{notification.title}</h4>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{notification.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotificationsCard

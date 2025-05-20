"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Transactions from "./pages/Transactions"
import Reports from "./pages/Reports"
import Budgets from "./pages/Budgets"
import Goals from "./pages/Goals"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import { TimeframeProvider } from "./context/TimeframeContext"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <Router>
      <ThemeProvider>
        <TimeframeProvider>
          <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Main Content */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
              <main className="flex-1 p-4 sm:p-6">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/transactions" element={<Transactions />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/budgets" element={<Budgets />} />
                  <Route path="/goals" element={<Goals />} />
                </Routes>
              </main>
            </div>
          </div>
        </TimeframeProvider>
      </ThemeProvider>
    </Router>
  )
}

export default App

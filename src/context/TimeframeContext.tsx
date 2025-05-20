"use client"

import { createContext, useState, useContext, type ReactNode } from "react"

type Timeframe = "monthly" | "quarterly" | "yearly"

interface TimeframeContextType {
  timeframe: Timeframe
  setTimeframe: (timeframe: Timeframe) => void
}

const TimeframeContext = createContext<TimeframeContextType | undefined>(undefined)

export function TimeframeProvider({ children }: { children: ReactNode }) {
  const [timeframe, setTimeframe] = useState<Timeframe>("monthly")

  return <TimeframeContext.Provider value={{ timeframe, setTimeframe }}>{children}</TimeframeContext.Provider>
}

export function useTimeframe() {
  const context = useContext(TimeframeContext)
  if (context === undefined) {
    throw new Error("useTimeframe must be used within a TimeframeProvider")
  }
  return context
}

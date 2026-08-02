import { useEffect, useState } from 'react'

const calculate = (startDate) => {
  const diff = Math.max(0, Date.now() - new Date(`${startDate}T00:00:00`).getTime())
  const days = Math.floor(diff / 86400000)
  return { years: Math.floor(days / 365), months: Math.floor((days % 365) / 30), days: (days % 365) % 30 }
}

export function useRelationshipCounter(startDate) {
  const [time, setTime] = useState(() => calculate(startDate))
  useEffect(() => {
    const timer = window.setInterval(() => setTime(calculate(startDate)), 60000)
    return () => window.clearInterval(timer)
  }, [startDate])
  return time
}

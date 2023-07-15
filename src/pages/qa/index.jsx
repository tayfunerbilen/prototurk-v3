import { useEffect } from "react"
import { setSidebarType } from "~/stores/app/actions"
import OpacityContent from "~/components/animated/opacity";

export default function QADashboard() {

  useEffect(() => {
    setSidebarType('qa')
    return () => {
      setSidebarType('app')
    }
  }, [])

  return (
    <OpacityContent>
      qa page
    </OpacityContent>
  )
}

import { useEffect } from "react"
import { setSidebarType } from "~/stores/app/actions"

export default function PopularQuestions() {

  useEffect(() => {
    setSidebarType('qa')
    return () => {
      setSidebarType('app')
    }
  }, [])

  return (
    <div>
      populer sorular
    </div>
  )
}

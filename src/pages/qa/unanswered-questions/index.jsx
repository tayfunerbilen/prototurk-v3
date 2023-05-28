import { useEffect } from "react"
import { setSidebarType } from "~/stores/app/actions"

export default function UnansweredQuestions() {

  useEffect(() => {
    setSidebarType('qa')
    return () => {
      setSidebarType('app')
    }
  }, [])

  return (
    <div>
      cevaplanmamis sorular
    </div>
  )
}

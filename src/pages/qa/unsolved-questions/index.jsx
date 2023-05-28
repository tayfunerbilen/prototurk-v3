import { useEffect } from "react"
import { setSidebarType } from "~/stores/app/actions"

export default function UnsolvedQuestions() {

  useEffect(() => {
    setSidebarType('qa')
    return () => {
      setSidebarType('app')
    }
  }, [])

  return (
    <div>
      cozulmemis sorular
    </div>
  )
}

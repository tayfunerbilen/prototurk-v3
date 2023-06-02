import { useParams } from "react-router-dom"

export default function User() {

  const { slug } = useParams()

  return (
    <div>
      user page = {slug}
    </div>
  )
}

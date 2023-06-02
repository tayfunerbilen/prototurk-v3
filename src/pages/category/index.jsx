import { useParams } from "react-router-dom"
import User from "../user"

export default function Category() {

  const { categorySlug } = useParams()

  return (
    <div>
      category page = {categorySlug}
    </div>
  )
}

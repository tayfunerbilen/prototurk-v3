import { useParams } from "react-router-dom"

export default function Category() {

  const { categorySlug } = useParams()

  return (
    <div>
      category page = {categorySlug}
    </div>
  )
}

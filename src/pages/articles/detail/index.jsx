import { useParams } from "react-router-dom"

export default function ArticleDetail() {
  const { slug } = useParams()
  return (
    <div>
      makale detayi = {slug}
    </div>
  )
}

import { useParams } from "react-router-dom"
import OpacityContent from "~/components/animated/opacity";

export default function Category() {

  const { categorySlug } = useParams()

  return (
    <OpacityContent key={categorySlug}>
      category page = {categorySlug}
    </OpacityContent>
  )
}

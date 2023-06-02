import { useParams } from "react-router-dom"

export default function Question() {

  const { slug } = useParams()

  const [id, ...urls] = slug.split('-')
  const url = urls.join('-')

  return (
    <div>
      Id = {id} <br />
      Slug: {url}
    </div>
  )
}

import { AiFillFile } from "react-icons/ai";
import { BsCameraVideoFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getContrastColor } from "~/utils/helpers";
import PropTypes from "prop-types"

export default function CategoryCard({ item }) {
  return (
    <Link
      style={{ '--color': item.color, '--text-color': getContrastColor(item.color) }}
      to={`/${item.slug}`}
      className="border border-zinc-200 hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-600 rounded-md flex flex-col items-center justify-center px-5 py-7 group"
    >
      <div className="w-24 h-24 rounded-full border flex items-center justify-center border-[color:var(--color)] mb-2.5 relative before:w-24 before:h-24 before:absolute before:rounded-full before:bg-[color:var(--color)] before:-top-2.5 before:-right-2.5 before:opacity-10">
        <img src={item.icon} className="max-h-[50%]" />
      </div>
      <div className="h-9 px-4 text-15 font-medium rounded flex items-center justify-center text-[color:var(--text-color)] bg-[color:var(--color)]">
        {item.title}
      </div>
      <div className="border-t border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 grid grid-cols-2 gap-x-4 pt-4 mt-4 text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white">
        <div className="flex flex-col gap-y-1.5 items-center text-center">
          <AiFillFile size={16} />
          {item.articleCount} ders
        </div>
        <div className="flex flex-col gap-y-1.5 items-center text-center">
          <BsCameraVideoFill size={16} />
          {item.videoCount} video
        </div>
      </div>
    </Link>
  )
}

CategoryCard.propTypes = {
  item: PropTypes.shape({
    color: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    articleCount: PropTypes.number,
    videoCount: PropTypes.number
  })
}

CategoryCard.defaultProps = {
  articleCount: 0,
  videoCount: 0
}

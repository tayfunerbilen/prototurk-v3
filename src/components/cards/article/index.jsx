import {Link} from "react-router-dom";
import {timeAgo} from "~/utils/date";
import {getContrastColor} from "~/utils/helpers";
import PropTypes from "prop-types"
import classNames from "classnames";

export default function ArticleCard({item, style}) {
	return (
		<Link
			to={`/makaleler/${item.slug}`}
			className={classNames("bg-white dark:bg-zinc-900 dark:border-zinc-700 p-5 border hover:border-zinc-300 dark:hover:border-zinc-600 rounded-md flex flex-col relative", {
				"before:w-[90%] before:rounded-b before:h-full before:absolute before:-bottom-1.5 before:left-1/2 before:-translate-x-1/2 before:bg-zinc-200/80 dark:before:bg-zinc-700 before:z-[-1]": style
			})}
		>
			<div
				style={{'--color': item.category.color, '--text-color': getContrastColor(item.category.color)}}
				className="h-8 px-4 rounded text-sm font-medium bg-[color:var(--color)] text-[color:var(--text-color)] self-start flex items-center"
			>
				{item.category.name}
			</div>
			<h6 className="text-xl font-medium my-2 dark:text-white line-clamp-1">{item.title}</h6>
			<time dateTime={item.date} className="text-xs text-zinc-500">{timeAgo(item.date)}</time>

			<div className="flex mt-4 items-center gap-x-2.5 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
				<img src={item.user.avatar} className="w-8 h-8 rounded-full object-cover"/>
				{item.user.name}
			</div>
		</Link>
	)
}

ArticleCard.propTypes = {
	style: PropTypes.bool,
	item: PropTypes.shape({
		slug: PropTypes.string.isRequired,
		category: PropTypes.shape({
			name: PropTypes.string.isRequired,
			color: PropTypes.string.isRequired,
		}),
		title: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		user: PropTypes.shape({
			name: PropTypes.string.isRequired,
			avatar: PropTypes.string.isRequired
		})
	})
}

ArticleCard.defaultProps = {
	style: true
}

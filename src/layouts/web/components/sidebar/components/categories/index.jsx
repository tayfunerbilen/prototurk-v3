import {categories} from "~/fake-api/index.js";
import MenuItem from "~/layouts/web/components/sidebar/components/menu/item/index.jsx";

export default function Categories() {

	const filteredCategories = categories.reduce((acc, curr) => [...acc, {
		path: `/${curr.slug}`,
		title: curr.title
	}], [])

	return (
		<section className="pt-5 mt-5 border-t dark:border-zinc-700">
			{filteredCategories.map((category, key) => <MenuItem item={category} key={key} />)}
		</section>
	)
}

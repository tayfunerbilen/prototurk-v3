import PropTypes from "prop-types"
import MenuItem from "./item"

export default function SidebarMenu({ menu,ln }) {
  return (
    <nav className="grid gap-y-1">
      {menu.map((item, key) => <MenuItem item={item} key={key} ln={ln} />)}
    </nav>
  )
}

SidebarMenu.propTypes = {
  menu: PropTypes.array,
  ln:PropTypes.string
}

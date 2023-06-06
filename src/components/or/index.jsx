import PropTypes from "prop-types"

export default function Or({ label }) {
  return (
    <div className="flex before:h-px before:flex-1 after:h-px after:flex-1 before:bg-zinc-300 after:bg-zinc-300 items-center gap-x-8 text-zinc-500 dark:text-zinc-400 text-xs dark:before:bg-zinc-700 dark:after:bg-zinc-700">
      <span>{label}</span>
    </div>
  )
}

Or.propTypes = {
  label: PropTypes.string
}

Or.defaultProps = {
  label: 'ya da'
}

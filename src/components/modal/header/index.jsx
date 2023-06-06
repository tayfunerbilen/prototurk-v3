import { IoClose } from "react-icons/io5";
import { modal } from "~/stores/modal/actions";
import PropTypes from "prop-types"

export default function ModalTitle({ title, disableClose }) {
  return (
    <header className="h-14 border-b border-zinc-300 dark:border-zinc-700 flex items-center justify-between pl-6 pr-2.5">
      <h6 className="font-medium text-lg dark:text-white">{title}</h6>
      {!disableClose && (
        <button
          type="button"
          onClick={() => modal.destroy()}
          className="w-9 h-9 rounded transition-colors flex items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-black hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:hover:text-white"
        >
          <IoClose size={20} />
        </button>
      )}
    </header>
  )
}

ModalTitle.propTypes = {
  title: PropTypes.string.isRequired,
  disableClose: PropTypes.bool
}

ModalTitle.defaultProps = {
  disableClose: false
}

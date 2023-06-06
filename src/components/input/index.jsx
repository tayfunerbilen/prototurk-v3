import { Field, ErrorMessage } from "formik";
import PropTypes from "prop-types"

export default function Input({ label, name, ...props }) {
  return (
    <div>
      {label && <div className="mb-2.5 text-sm text-zinc-600 dark:text-zinc-400">{label}</div>}
      <Field
        name={name}
        className="w-full h-10 bg-zinc-50 dark:bg-transparent dark:border-zinc-700 border border-zinc-300 rounded outline-none px-3 text-15 font-medium dark:text-white dark:focus:border-zinc-500"
        {...props}
      />
      <ErrorMessage component="small" name={name} className="text-xs text-red-500 dark:text-red-400 mt-1 block" />
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  props: PropTypes.object
}

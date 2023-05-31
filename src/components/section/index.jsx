import PropTypes from "prop-types"

export default function Section({ title, description, children }) {
  return (
    <section className="border-b border-[#f3f6f9] dark:border-zinc-700 pb-10 mb-10">
      <header className="mb-4">
        <h2 className="text-3xl	font-bold text-secondary dark:text-white">{title}</h2>
        {description && (
          <p className="mt-3 dark:text-white/80">
            {description}
          </p>
        )}
      </header>
      {children}
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
}

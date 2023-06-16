import classNames from "classnames";
import PropTypes from "prop-types"
import { createElement } from "react";

export default function Button({ children, as, variant, size, className, ...props }) {
  return createElement(as, {
    ...props,
    className: classNames("inline-flex items-center justify-center rounded", {
      "bg-primary dark:bg-blue-500 text-white": variant === 'primary',
      "bg-transparent border border-primary dark:border-blue-500 text-primary dark:text-white": variant === 'primary-outline',
      "bg-white text-primary": variant === 'light',
      "bg-zinc-200 text-primary": variant === 'gray',
      "px-5 font-medium h-10 text-sm md:text-15": size === 'normal',
      "px-4 font-medium h-8 text-[13px] md:text-sm": size === 'small',
      [className]: !!className
    })
  }, children)
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  variant: PropTypes.oneOf(['primary', 'primary-outline', 'light']),
  size: PropTypes.oneOf(['normal', 'small', 'large']),
  as: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  props: PropTypes.object,
  className: PropTypes.string
}

Button.defaultProps = {
  as: 'button',
  variant: 'primary',
  size: 'normal'
}

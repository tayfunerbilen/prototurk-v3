import classNames from "classnames";
import PropTypes from "prop-types"
import { createElement } from "react";

export default function Button({ children, as, variant, size, ...props }) {
  return createElement(as, {
    ...props,
    className: classNames("h-10 flex items-center justify-center rounded", {
      "bg-primary text-white font-medium": variant === 'primary',
      "px-5": size === 'normal'
    })
  }, children)
}

Button.propTypes = {
  children: PropTypes.element,
  variant: PropTypes.oneOf(['primary', 'light']),
  size: PropTypes.oneOf(['normal', 'small', 'large']),
  as: PropTypes.string,
  props: PropTypes.object
}

Button.defaultProps = {
  as: 'button',
  variant: 'primary',
  size: 'normal'
}

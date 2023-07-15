import {motion} from "framer-motion";
import PropTypes from "prop-types";

export default function OpacityContent({children, delay, exitDelay, ...props}) {
	return (
		<motion.section
			initial={{opacity: 0}}
			animate={{opacity: 1, transition: {delay}}}
			exit={{opacity: 0, transition: {delay: exitDelay}}}
			{...props}
		>
			{children}
		</motion.section>
	)
}

OpacityContent.propTypes = {
	children: PropTypes.node,
	delay: PropTypes.number,
	exitDelay: PropTypes.number,
	props: PropTypes.object
}

OpacityContent.defaultProps = {
	delay: 0,
	exitDelay: 0,
}

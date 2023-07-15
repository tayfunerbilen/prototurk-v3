import {motion} from "framer-motion";
import PropTypes from "prop-types";

export default function AnimatedContent({ children, delay, ...props }) {
	return (
		<motion.section
			initial={{ opacity: 0, translateY: 10 }}
			animate={{ opacity: 1, translateY: 0, transition: { delay } }}
			exit={{ opacity: 0, translateY: 10 }}
			{...props}
		>
			{children}
		</motion.section>
	)
}

AnimatedContent.propTypes = {
	children: PropTypes.node,
	delay: PropTypes.number,
	props: PropTypes.object
}

AnimatedContent.defaultProps = {
	delay: 0
}

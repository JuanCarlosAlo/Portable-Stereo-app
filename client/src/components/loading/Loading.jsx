import { motion } from 'framer-motion';

import { StyledLoading } from './styles';

const Loading = () => {
	const loadingContainerVariants = {
		start: {
			staggerChildren: 0.1
		},

		end: {
			transition: {
				staggerChildren: 0.1
			}
		}
	};
	const loadingCircleVariants = {
		start: {
			opacity: 0
		},
		end: {
			opacity: 1
		}
	};
	const loadingCircleTransition = {
		duration: 0.5,
		repeat: Infinity,
		times: [0, 0.1, 0.5]
	};
	return (
		<StyledLoading
			variants={loadingContainerVariants}
			initial='start'
			animate='end'
		>
			<p>Loading</p>
			<motion.span
				variants={loadingCircleVariants}
				transition={loadingCircleTransition}
			>
				.
			</motion.span>
			<motion.span
				variants={loadingCircleVariants}
				transition={loadingCircleTransition}
			>
				.
			</motion.span>
			<motion.span
				variants={loadingCircleVariants}
				transition={loadingCircleTransition}
			>
				.
			</motion.span>
		</StyledLoading>
	);
};

export default Loading;

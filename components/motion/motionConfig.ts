export const fadeIn = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	transition: { duration: 0.5 },
};

export const fadeSlide = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -20 },
	transition: { duration: 0.5 },
};

export const fadeSlideRight = {
	initial: { opacity: 0, x: 50 },
	animate: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: -50 },
	transition: { duration: 0.5 },
};

export const baseFadeInUp = {
	initial: { opacity: 0, y: 40 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6, ease: 'easeOut' },
};

export const hoverScaleSpring = {
	whileHover: { scale: 1.05 },
	transition: { type: 'spring', stiffness: 200 },
};

// Configuration for stagger effect trigger
export const staggerConfig = {
	initial: 'hidden',
	whileInView: 'visible',
	viewport: { once: true, amount: 0.3 },
};

// Variant definitions for the stagger container
export const staggerContainerVariants = {
	hidden: {}, // Initial state for the container (can be empty if children handle animation)
	visible: {
		transition: { staggerChildren: 0.4, delayChildren: 0.1 },
	},
};

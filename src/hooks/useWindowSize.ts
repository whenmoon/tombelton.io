import { useState, useEffect } from 'react';
import { throttle } from "lodash";
export interface WindowDimensions {
	width: number;
	height: number;
}

function getWindowDimensions(): WindowDimensions {
	if (typeof window !== "undefined") {
		const { innerWidth: width, innerHeight: height } = window;
		return {
			width,
			height
		};
	}
	return {
		width: 0,
		height: 0
	};
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		const throttledResizeHandler = throttle(handleResize, 500)

		window.addEventListener('resize', throttledResizeHandler);
		return () => window.removeEventListener('resize', throttledResizeHandler);
	}, []);

	return windowDimensions;
}
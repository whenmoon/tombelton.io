import { RefObject, useEffect, useRef, useState } from "react"

export default function useIsOnScreen(
	primaryRef: RefObject<Element | null>,
	secondaryRef?: RefObject<Element | null>,
	useDualRefs: boolean = false,
) {
	const [isPrimaryIntersecting, setPrimaryIntersecting] = useState(false)
	const [isSecondaryIntersecting, setSecondaryIntersecting] = useState(false)
	const secondaryObserverRef = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		const primaryObserver = new IntersectionObserver(
			([entry]) => setPrimaryIntersecting(entry.isIntersecting))

		if (primaryRef.current) primaryObserver.observe(primaryRef.current)

		if (useDualRefs) {
			secondaryObserverRef.current = new IntersectionObserver(
				([entry]) => setSecondaryIntersecting(entry.isIntersecting))

			if (secondaryRef && secondaryRef.current) secondaryObserverRef.current.observe(secondaryRef.current)
		}
		return () => {
			primaryObserver.disconnect();
			if (secondaryObserverRef.current) secondaryObserverRef.current.disconnect();
		}
	}, [primaryRef, secondaryRef, useDualRefs])

	if (!primaryRef && !secondaryRef) return false;

	if (useDualRefs) return isPrimaryIntersecting && isSecondaryIntersecting;

	return isPrimaryIntersecting
}

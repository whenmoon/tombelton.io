import { useRef } from 'react';
import Feature from '../../../components/projects/fleeting/Feature';
import { WindowDimensions } from '../../../hooks/useWindowSize';
import featureData from './data'

interface Props {
	windowDimensions: WindowDimensions;
}

export default function Fleeting(props: Props) {
	const { windowDimensions } = props;
	console.log('windowDimensions -------------------->', windowDimensions);
	const scrollToRefs = useRef<(HTMLDivElement | null)[]>([])
	return featureData.map((data, index) => {
		return (
			<Feature
				key={`key-${index}`}
				data={data}
				index={index}
				scrollToRefs={scrollToRefs}
			/>
		);
	})
}

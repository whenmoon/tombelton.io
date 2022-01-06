import { useRef } from 'react';
import Feature from '../../../components/projects/fleeting/Feature';
import featureData from './data'

export default function Fleeting() {
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

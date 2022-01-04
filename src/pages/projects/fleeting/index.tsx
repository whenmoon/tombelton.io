import Feature from '../../../components/projects/fleeting/Feature';
import featureData from './data'

export default function Fleeting() {
	return featureData.map((data, index) => {
		return (
			<Feature
				key={`key-${index}`}
				data={data}
			/>
		);
	})
}

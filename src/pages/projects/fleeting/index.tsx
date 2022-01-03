import Feature from '../../../components/projects/fleeting/Feature';
import featureData from './data'

export default function Fleeting() {
	return featureData.map((data, index) => (
		<Feature
			key={index}
			data={data}
		/>
	))
}

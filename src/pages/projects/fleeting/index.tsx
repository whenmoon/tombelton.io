import Feature from '../../../components/projects/fleeting/Feature';
import featureData from './data'
import { Collapse } from 'antd';

export default function Fleeting() {
	return featureData.map((data, index) => (
		<Feature
			key={index}
			data={data}
		/>
	))
}

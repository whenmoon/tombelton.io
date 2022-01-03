import type { NextPage } from 'next'
import { AppProps } from 'next/app';
import Feature from '../../../components/projects/fleeting/Feature';
import featureData from './data'

interface Props {
	darkTheme: boolean;
}

export default function Fleeting(props: any) {
	const { darkTheme } = props;
	return featureData.map((data, index) => (
		<Feature
			darkTheme={darkTheme}
			key={index}
			data={data}
		/>
	))
}

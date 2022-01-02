import type { NextPage } from 'next'
import { AppProps } from 'next/app';
import Feature from '../../../components/projects/fleeting/Feature';

interface Props {
	darkTheme: boolean;
}

export default function Fleeting(props: any) {
	const { darkTheme } = props;

	return (
		<Feature darkTheme={darkTheme} />
	)
}

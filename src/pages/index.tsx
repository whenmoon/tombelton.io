import type { AppProps } from 'next/app'
import Fleeting from './projects/fleeting'

interface Props {
	darkTheme: boolean;
	//pageProps: any;
}

export default function Home(props: Props) {
	return <Fleeting {...props} />
}

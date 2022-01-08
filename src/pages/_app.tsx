require('../styles/vendor-theme/less/theme.less');
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from "next/dynamic";
import { NavOverlay } from '../components/NavOverlay/NavOverlay';

const App = ({ Component: Home, pageProps }: AppProps) => {

	return (
		<>
			<Home {...pageProps} />
			<NavOverlay />
		</>
	)
}

export default dynamic(() => Promise.resolve(App), {
	ssr: false,
});
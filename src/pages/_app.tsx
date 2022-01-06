require('../styles/vendor-theme/less/theme.less');
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NavOverlay } from '../components/NavOverlay/NavOverlay';
import dynamic from "next/dynamic";

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
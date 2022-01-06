require('../styles/vendor-theme/less/theme.less');
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NavOverlay } from '../components/NavOverlay/NavOverlay';

const App = ({ Component: Home, pageProps }: AppProps) => {

	return (
		<>
			<Home {...pageProps} />
			<NavOverlay />
		</>
	)
}
export default App

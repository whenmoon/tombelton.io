require('../styles/vendor-theme/less/theme.less');
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NavOverlay } from '../components/NavOverlay/NavOverlay';
import useWindowDimensions from '../hooks/useWindowSize';

const App = ({ Component: Home, pageProps }: AppProps) => {
	const windowDimensions = useWindowDimensions();

	return (
		<>
			<Home windowDimensions={windowDimensions} {...pageProps} />
			<NavOverlay windowDimensions={windowDimensions} />
		</>
	)
}
export default App

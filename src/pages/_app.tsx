import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NavOverlay } from '../components/NavOverlay';
import { useState } from 'react';
require('../styles/vendor-theme/less/theme.less');

const App = ({ Component: Home, pageProps }: AppProps) => {
	const [darkTheme, setDarkTheme] = useState(false);

	return (
		<>
			<Home
				{...pageProps}
				darkTheme={darkTheme}
			/>
			<NavOverlay
				darkTheme={darkTheme}
				setDarkTheme={setDarkTheme}
			/>
		</>
	)
}
export default App

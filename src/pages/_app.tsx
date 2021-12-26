import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NavOverlay } from '../components/NavOverlay';
import { useState } from 'react';
require('../styles/vendor-theme/less/theme.less');

const MyApp = ({ Component, pageProps }: AppProps) => {
	const [darkTheme, setDarkTheme] = useState(true);

	return (
		<>
			<Component
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
export default MyApp

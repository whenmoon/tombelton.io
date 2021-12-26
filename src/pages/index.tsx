import styles from '../styles/Home.module.css'
import type { AppProps } from 'next/app'
import React from 'react';
import VideoPlayer from '../components/VideoPlayer'
interface Props extends Omit<AppProps, 'pageProps'> {
	darkTheme: boolean;
	pageProps: any;
}

const Home = (props: Props) => {
	const { darkTheme } = props;

	return (
		<div className={darkTheme
			? styles.pageContainerDark
			: styles.pageContainer}
		>
			<div className={styles.fleetingFeatureGrid}>
				<div className={styles.fleetingFeaturePanel} />
				<div className={styles.fleetingFeaturePanel} >
					<div className={styles.fleetingFeaturePanelVideoContainer} >
						<VideoPlayer />
					</div>
				</div>
			</div>
		</div >
	)
}

export default Home;
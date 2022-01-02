import styles from '../../../../styles/Home.module.css'
import React, { useState } from 'react';
import VideoPlayer from '../VideoPlayer'
import ProjectSteps from '../FeatureSteps';
import { Divider } from 'antd';
import { AppProps } from 'next/app';

interface Props {
	darkTheme: boolean;
}

export default function Feature(props: Props) {
	const [playedSeconds, setPlayedSecconds] = useState(0)
	const { darkTheme } = props;

	const step = (() => {
		switch (true) {
			case playedSeconds < 13:
				return 0;
			case playedSeconds < 28:
				return 1;
			case playedSeconds < 40:
				return 2;
			case playedSeconds < 68:
				return 3;
			case playedSeconds >= 68:
				return 4;
			default: return 0;
		}
	})()

	return (
		<div className={darkTheme
			? styles.pageContainerDark
			: styles.pageContainer}
		>
			<div className={styles.fleetingFeatureGrid}>
				<div className={styles.fleetingFeaturePanel} >
					<ProjectSteps step={step} />
				</div>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<Divider type='vertical' style={{ height: '65%' }} />
				</div>
				<div className={styles.fleetingFeaturePanel} >
					<div className={styles.fleetingFeaturePanelVideoContainer} >
						<VideoPlayer setPlayedSecconds={setPlayedSecconds} />
					</div>
				</div>
			</div>
		</div >
	)
}
import styles from './styles.module.css'
import React, { useState } from 'react';
import VideoPlayer from '../VideoPlayer'
import ProjectSteps from '../FeatureSteps';
import { Divider } from 'antd';
import { FleetingData } from '../../../../pages/projects/fleeting/data'

interface Props {
	darkTheme: boolean;
	data: FleetingData
}

export default function Feature(props: Props) {
	const [playedSeconds, setPlayedSecconds] = useState(0)
	const { darkTheme, data } = props;
	//const step = (() => {
	//	switch (true) {
	//		case playedSeconds < 13:
	//			return 0;
	//		case playedSeconds < 28:
	//			return 1;
	//		case playedSeconds < 40:
	//			return 2;
	//		case playedSeconds < 68:
	//			return 3;
	//		case playedSeconds >= 68:
	//			return 4;
	//		default: return 0;
	//	}
	//})()

	function callStepTimer(seconds: number) {
		setPlayedSecconds(data.step(seconds))
	}

	return (
		<div className={styles.featureContainer}>
			<div className={styles.fleetingFeatureGrid}>
				<div className={styles.fleetingFeaturePanel} >
					<ProjectSteps step={step} />
				</div>
				<div className={styles.dividerContainer}>
					<Divider type='vertical' style={{ height: '80%' }} />
				</div>
				<div className={styles.fleetingFeaturePanel} >
					<div className={styles.fleetingFeaturePanelVideoContainer} >
						<VideoPlayer setPlayedSecconds={callStepTimer} />
					</div>
				</div>
			</div>
		</div >
	)
}
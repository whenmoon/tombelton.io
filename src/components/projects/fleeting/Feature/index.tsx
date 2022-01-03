import styles from './styles.module.css'
import React, { useState } from 'react';
import VideoPlayer from '../VideoPlayer'
import ProjectSteps from '../FeatureSteps';
import { Divider } from 'antd';
import { FleetingData } from '../../../../pages/projects/fleeting/data'

interface Props { data: FleetingData }

export default function Feature(props: Props) {
	const [step, setStep] = useState(0)
	const { data } = props;

	function stepTimer(playedSeconds: number) {
		const step = data.step(playedSeconds);
		setStep(step)
	}

	return (
		<>
			<div className={styles.featureContainer}>
				<div className={styles.fleetingFeatureGrid}>
					<div className={styles.fleetingFeaturePanel} >
						<ProjectSteps step={step} title={data.title} />
					</div>
					<div className={styles.dividerContainer}>
						<Divider type='vertical' style={{ height: '80%' }} />
					</div>
					<div className={styles.fleetingFeaturePanel} >
						<div className={styles.fleetingFeaturePanelVideoContainer} >
							<VideoPlayer setPlayedSecconds={stepTimer} />
						</div>
					</div>
				</div>
			</div >
		</>
	)
}

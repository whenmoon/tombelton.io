import styles from './styles.module.css'
import React, { useRef, useState } from 'react';
import VideoPlayer from '../VideoPlayer'
import ProjectSteps from '../FeatureSteps';
import { Divider } from 'antd';
import { FleetingData } from '../../../../pages/projects/fleeting/data'
import useIsOnScreen from '../../../../hooks/useIsOnScreen';

interface Props { data: FleetingData }

export default function Feature(props: Props) {
	const [step, setStep] = useState(0)
	const { data } = props;

	const visibilityRefTop = useRef(null)
	const visibilityRefBottom = useRef(null)
	const isVisible = useIsOnScreen(visibilityRefTop, visibilityRefBottom, true)

	function stepTimer(playedSeconds: number) {
		const step = data.step(playedSeconds);
		setStep(step)
	}

	return (
		<div className={styles.featureContainer}>
			<div className={styles.fleetingFeatureGrid}>
				<div className={styles.fleetingFeaturePanel} >
					<ProjectSteps step={step} title={data.title} />
				</div>
				<div className={styles.dividerContainer}>
					<div ref={visibilityRefTop} style={{
						width: 5, height: 5, backgroundColor: 'red', alignSelf: 'center', marginBottom: 500
					}} />
					<Divider type='vertical' style={{ height: '80%' }
					} />
					<div ref={visibilityRefBottom} style={{
						width: 5, height: 5, backgroundColor: 'red', alignSelf: 'center', marginTop: 500
					}} />
				</div>
				<div className={styles.fleetingFeaturePanel} >
					<div className={styles.fleetingFeaturePanelVideoContainer} >
						<VideoPlayer setPlayedSecconds={stepTimer} playing={isVisible} />
					</div>
				</div>
			</div>
		</div >
	)
}

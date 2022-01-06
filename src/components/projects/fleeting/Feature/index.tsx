import styles from './styles.module.css'
import React, { useRef, useState } from 'react';
import VideoPlayer from '../VideoPlayer'
import FeatureSteps from '../FeatureSteps';
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
					<FeatureSteps step={step} title={data.title} />
				</div>
				<div className={styles.dividerContainer}>
					<div ref={visibilityRefTop} />
					<Divider type='vertical' style={{ height: '80%' }} />
					<div ref={visibilityRefBottom} />
				</div>
				<div className={styles.fleetingFeaturePanel} >
					<VideoPlayer setPlayedSecconds={stepTimer} playing={isVisible} />
				</div>
			</div>
		</div>
	)
}

//style={{ width: 5, height: 5, backgroundColor: 'red' }}
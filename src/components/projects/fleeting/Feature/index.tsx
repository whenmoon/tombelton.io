import styles from './styles.module.css'
import React, { ReactElement, RefObject, useRef, useState } from 'react';
import VideoPlayer from '../VideoPlayer'
import FeatureSteps from '../FeatureSteps';
import { Divider } from 'antd';
import { FleetingData } from '../../../../data'
import useIsOnScreen from '../../../../hooks/useIsOnScreen';

interface Props {
	data: FleetingData;
	index: number;
	scrollToRefs: RefObject<(HTMLDivElement | null)[]>;
}

export default function Feature(props: Props): ReactElement {
	const [step, setStep] = useState(0);
	const { data: { goToStep, title, stepDetails, videoUrl }, scrollToRefs, index } = props;

	const visibilityRefTop = useRef(null);
	const visibilityRefBottom = useRef(null);
	const isVisible = useIsOnScreen(visibilityRefTop, visibilityRefBottom, true);

	function stepTimer(playedSeconds: number): void {
		const step = goToStep(playedSeconds);
		setStep(step)
	}

	const featureSteps = (
		<FeatureSteps
			step={step}
			title={title}
			index={index}
			stepDetails={stepDetails}
			scrollToRefs={scrollToRefs}
		/>
	)

	const videoPlayer = (
		<VideoPlayer
			setPlayedSecconds={stepTimer}
			playing={isVisible}
			videoUrl={videoUrl}
		/>
	);

	return (
		<div className={styles.featureContainer}>
			<div className={styles.fleetingFeatureGrid}>
				<div className={styles.fleetingFeaturePanel}>
					{featureSteps}
				</div>
				<div className={styles.dividerContainer}>
					<div ref={visibilityRefTop} />
					<Divider type='vertical' style={{ height: '80%' }} />
					<div ref={visibilityRefBottom} />
					<div ref={(node) => { if (scrollToRefs.current) scrollToRefs.current[index] = node }} />
				</div>
				<div className={styles.fleetingFeaturePanel} >
					{videoPlayer}
				</div>
			</div>
		</div >
	)
};

//style={{ width: 5, height: 5, backgroundColor: 'red' }}
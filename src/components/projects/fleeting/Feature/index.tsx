import styles from './styles.module.css'
import React, { ReactElement, RefObject, useRef, useState } from 'react';
import VideoPlayer from '../VideoPlayer'
import FeatureSteps from '../FeatureSteps';
import { Divider } from 'antd';
import { FleetingData } from '../../../../data'
import useIsOnScreen from '../../../../hooks/useIsOnScreen';
import Loader from '../../../Loader/Loader';

interface Props {
	data: FleetingData;
	index: number;
	scrollToRefs: RefObject<(HTMLDivElement | null)[]>;
}

export default function Feature(props: Props): ReactElement {
	const [step, setStep] = useState(0);
	const [overlayVideoLoader, setOverlayVideoLoader] = useState(false);

	const { data: {
		goToStep,
		title,
		stepDetails,
		videoUrl,
		thumbnailUrl },
		scrollToRefs,
		index } = props;

	const visibilityRefTop = useRef(null);
	const visibilityRefBottom = useRef(null);
	const isVisible = useIsOnScreen(visibilityRefTop, visibilityRefBottom, true);

	function stepTimer(playedSeconds: number): void {
		const step = goToStep(playedSeconds);
		setStep(step)
	}

	return (
		<>
			<div className={styles.featureContainer}>
				<div className={styles.fleetingFeatureGrid}>
					<div className={styles.fleetingFeaturePanel}>
						<FeatureSteps
							step={step}
							title={title}
							index={index}
							stepDetails={stepDetails}
							scrollToRefs={scrollToRefs}
						/>
					</div>
					<div className={styles.verticalDividerContainer}>
						<div ref={visibilityRefTop} />
						<Divider type='vertical' style={{ height: '80%' }} />
						<div ref={visibilityRefBottom} />
						<div ref={(node) => { if (scrollToRefs.current) scrollToRefs.current[index] = node }} />
					</div>
					<div className={styles.fleetingFeaturePanel} >
						<div className={styles.videoContainer}>
							<VideoPlayer
								setPlayedSecconds={stepTimer}
								videoUrl={videoUrl}
								isVisible={isVisible}
								thumbnailUrl={thumbnailUrl}
								setOverlayVideoLoader={setOverlayVideoLoader}
							/>
							{overlayVideoLoader &&
								<div className={styles.loaderContainer}>
									<Loader />
								</div>
							}
						</div>
					</div>
				</div>
			</div >
			<div className={styles.horizontallDividerContainer}>
				<div />
				<div className={styles.horizontallDivider} />
				<div />
			</div>
		</>
	)
};

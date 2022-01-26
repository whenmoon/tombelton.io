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
	numOfFeatures: number
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
		numOfFeatures,
		index } = props;

	const visibilityRefTop = useRef(null);
	const visibilityRefBottom = useRef(null);
	const isVisible = useIsOnScreen(visibilityRefTop, visibilityRefBottom, true);

	const visibilityRefSmallScreen = useRef(null);
	const isVisibleOnSmallScreen = useIsOnScreen(visibilityRefSmallScreen);

	function stepTimer(playedSeconds: number): void {
		const step = goToStep(playedSeconds);
		setStep(step)
	}

	const isScrollRef = scrollToRefs.current && scrollToRefs.current[index];

	return (
		<>
			<div className={styles.featureContainer}>
				<div className={styles.fleetingFeatureGrid}>
					<div className={styles.fleetingFeaturePanel}>
						<div
							ref={(node) => { if (scrollToRefs.current) scrollToRefs.current[index] = node }}
							className={styles.smallscreenScrollRef}
						/>
						<FeatureSteps
							step={step}
							title={title}
							index={index}
							stepDetails={stepDetails}
							scrollToRefs={scrollToRefs}
							numOfFeatures={numOfFeatures}
						/>
					</div>
					{/*<div className={styles.verticalDividerContainer}>
						<div ref={visibilityRefTop} />
						<Divider type='vertical' style={{ height: '80%' }} />
						<div ref={visibilityRefBottom} />
						<div ref={(node) => { if (scrollToRefs.current) scrollToRefs.current[index] = node }} />
					</div>*/}
					<div className={styles.fleetingFeaturePanel} >
						<div className={styles.smallScreenVisabilityRef} ref={visibilityRefSmallScreen} />
						<div className={styles.videoContainer}>
							<VideoPlayer
								setPlayedSecconds={stepTimer}
								videoUrl={videoUrl}
								isVisible={isVisible || isVisibleOnSmallScreen}
								thumbnailUrl={thumbnailUrl}
								setOverlayVideoLoader={setOverlayVideoLoader}
							/>
							{overlayVideoLoader &&
								<div>
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

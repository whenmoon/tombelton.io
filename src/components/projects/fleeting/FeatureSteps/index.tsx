import React, { Dispatch, ReactElement, RefObject, SetStateAction, useState, useRef } from "react";
import { Steps } from "antd";
import styles from './styles.module.css'
import { InfoCircleOutlined, DownCircleOutlined } from '@ant-design/icons';
import { StepDetail } from "../../../../data";

interface Props {
	step: number;
	title: string;
	index: number;
	scrollToRefs: RefObject<(HTMLDivElement | null)[]>;
	stepDetails: StepDetail[];
	numOfFeatures: number
}

const { Step } = Steps;

export default function FeatureSteps(props: Props): ReactElement {
	const [mouseOverDownIcon, setMouseOverDownIcon] = useState(false);
	const [showStepsOnSmallScreen, setShowStepsOnSmallScreen] = useState(false);

	const {
		step,
		title,
		index,
		scrollToRefs,
		stepDetails,
		numOfFeatures
	} = props;

	function progressDot(dot: ReactElement): ReactElement { return dot };

	function onDownIconMouseEnterAndExit(): void {
		setMouseOverDownIcon((prevState) => !prevState)
	}

	const isLastItem = numOfFeatures === index + 1;

	function onDownIconClick(): void {
		if (!isLastItem && scrollToRefs.current) {
			const scrollRef = scrollToRefs.current[index + 1];
			scrollRef!.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	function onInfoIconClick(): void {
		setShowStepsOnSmallScreen((prevState) => !prevState)
	}

	return (
		<div className={styles.stepsPanelContainer}>
			<div className={styles.titleContainer}>
				<div className={styles.titleInnerContainer}>
					<h1 className={styles.title}>{title}</h1>
				</div>
				<div className={styles.infoIconContainer} onClick={onInfoIconClick}>
					<InfoCircleOutlined style={{
						fontSize: 30, color: showStepsOnSmallScreen
							? 'rgb(51, 146, 259)'
							: 'rgb(159, 159, 159)'
					}}
					/>
				</div>
				<div
					className={styles.smallScreenDownIconInnerContainer}
					onMouseEnter={onDownIconMouseEnterAndExit}
					onMouseLeave={onDownIconMouseEnterAndExit}
					onClick={onDownIconClick}
				>
					{!isLastItem &&
						<DownCircleOutlined
							style={{
								fontSize: 30, color: mouseOverDownIcon
									? 'rgb(51, 146, 259)'
									: 'rgb(159, 159, 159)'
							}}
						/>
					}
				</div>
			</div>
			<div className={showStepsOnSmallScreen ? styles.stepsContainerSmallScreen : styles.stepsContainer}>
				<Steps
					current={step}
					progressDot={progressDot}
					direction="vertical"
					size="small"
				>
					{stepDetails.map(({ title, description }) => (
						<Step
							title={title}
							description={description}
							key={`key ${title}`}
						/>
					))}
				</Steps>
				{showStepsOnSmallScreen && <div className={styles.smallScreenStepsPadding}></div>}
			</div>
			<div className={styles.downIconContainer}>
				<div
					className={styles.downIconInnerContainer}
					onMouseEnter={onDownIconMouseEnterAndExit}
					onMouseLeave={onDownIconMouseEnterAndExit}
					onClick={onDownIconClick}
				>
					{!isLastItem &&
						<DownCircleOutlined
							style={{
								fontSize: 30, color: mouseOverDownIcon
									? 'rgb(51, 146, 259)'
									: 'rgb(159, 159, 159)'
							}}
						/>
					}
				</div>
			</div>
		</div>
	)
}

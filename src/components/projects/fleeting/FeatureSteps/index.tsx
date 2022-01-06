import React, { ReactElement, RefObject, useState } from "react";
import { Steps } from "antd";
import styles from './styles.module.css'
import { DownCircleOutlined } from '@ant-design/icons';
import { StepDetail } from "../../../../pages/projects/fleeting/data";

interface Props {
	step: number;
	title: string;
	index: number;
	scrollToRefs: RefObject<(HTMLDivElement | null)[]>;
	stepDetails: StepDetail[];
}

const { Step } = Steps;

export default function FeatureSteps(props: Props): ReactElement {
	const [mouseOverIcon, setMouseOverIcon] = useState(false);
	const { step, title, index, scrollToRefs, stepDetails } = props;

	function progressDot(dot: ReactElement) { return dot };

	function onIconMouseEnterAndExit(): void {
		setMouseOverIcon((prevState) => !prevState)
	}

	const isScrollRef = scrollToRefs.current && scrollToRefs.current[index + 1];

	function onIconClick(): void {
		if (isScrollRef) {
			const scrollRef = scrollToRefs.current[index + 1];
			scrollRef!.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	return (
		<div className={styles.stepsPanelContainer}>
			<div className={styles.titleContainer}>
				<div className={styles.titleInnerContainer}>
					<h1>{title}</h1>
				</div>
			</div>
			<div className={styles.stepsContainer}>
				<Steps current={step} progressDot={progressDot} direction="vertical">
					{stepDetails.map(({ title, description }) => (
						<Step
							title={title}
							description={description}
							key={`key ${title}`} />
					))}
				</Steps>
			</div>
			<div className={styles.downIconContainer}>
				<div
					className={styles.downIconInnerContainer}
					onMouseEnter={onIconMouseEnterAndExit}
					onMouseLeave={onIconMouseEnterAndExit}
					onClick={onIconClick}
				>
					{isScrollRef &&
						<DownCircleOutlined
							style={{
								fontSize: 30, color: mouseOverIcon
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

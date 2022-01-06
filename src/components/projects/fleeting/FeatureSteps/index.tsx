import React, { ReactElement, RefObject, useState } from "react";
import { Steps } from "antd";
import styles from './styles.module.css'
import { DownCircleOutlined } from '@ant-design/icons';

interface Props {
	step: number;
	title: string;
	index: number;
	scrollToRefs: RefObject<(HTMLDivElement | null)[]>;
}

const { Step } = Steps;

export default function FeatureSteps(props: Props): ReactElement {
	const [mouseOverIcon, setMouseOverIcon] = useState(false);
	const { step, title, index, scrollToRefs } = props;

	function progressDot(dot: ReactElement) { return dot };

	function onIconMouseEnterAndExit() {
		setMouseOverIcon((prevState) => !prevState)
	}

	const isScrollRef = scrollToRefs.current && scrollToRefs.current[index + 1];

	function onIconClick() {
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
					<Step title="Sign up" description="Sign up using your phone number" />
					<Step title="Error hanlding" description="Credential validation takes place on both the front and back ends" />
					<Step title="Sign up" description="Receieve an SMS with OTP code" />
					<Step title="Sign up" description="Add more account details" />
					<Step title="Account" description="Sign out" />
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

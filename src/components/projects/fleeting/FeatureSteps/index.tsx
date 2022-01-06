import React, { ReactElement, useState } from "react";
import { Steps } from "antd";
import styles from './styles.module.css'
import { DownCircleOutlined } from '@ant-design/icons';

interface Props {
	step: number;
	title: string;
}

const { Step } = Steps;

export default function ProjectSteps(props: Props): ReactElement {
	const [mouseOverIcon, setMouseOverIcon] = useState(false);
	const { step, title } = props;

	function progressDot(dot: ReactElement) { return dot };

	function onIconMouseEnterAndExit() {
		setMouseOverIcon((prevState) => !prevState)
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
				>
					<DownCircleOutlined
						style={{
							fontSize: 30, color: mouseOverIcon
								? 'rgb(51, 146, 259)'
								: 'rgb(159, 159, 159)'
						}}
						twoToneColor="rgb(62, 142, 247)"
					/>
				</div>
			</div>
		</div>
	)
}

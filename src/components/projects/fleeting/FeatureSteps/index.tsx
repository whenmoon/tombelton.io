import React, { ReactElement } from "react";
import { Steps } from "antd";
import styles from './styles.module.css'

interface Props {
	step: number;
}

const { Step } = Steps;


export default function ProjectSteps(props: Props): ReactElement {
	const { step } = props;

	function progressDot(dot: ReactElement) { return dot }

	return (
		<div className={styles.stepsContainer}>
			<Steps current={step} progressDot={progressDot} direction="vertical">
				<Step title="Sign up" description="Sign up using your phone number" />
				<Step title="Error hanlding" description="Credential validation takes place on both the front and back ends" />
				<Step title="Sign up" description="Receieve an SMS with OTP code" />
				<Step title="Sign up" description="Add more account details" />
				<Step title="Account" description="Sign out" />
			</Steps>
		</div>
	)
}
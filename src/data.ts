export interface FleetingData {
	title: string;
	goToStep: (playedSeconds: number) => number;
	videoUrl: string;
	stepDetails: StepDetail[];
};

export interface StepDetail {
	title: string;
	description?: string;
}

const data: FleetingData[] = [
	{
		title: 'Sign up',
		videoUrl: "/assets/sign_up_trimmed_grey_rotato_4k.mp4",
		goToStep: (playedSeconds: number): number => {
			switch (true) {
				case playedSeconds < 13:
					return 0;
				case playedSeconds < 28:
					return 1;
				case playedSeconds < 40:
					return 2;
				case playedSeconds < 68:
					return 3;
				case playedSeconds >= 68:
					return 4;
				default: return 0;
			}
		},
		stepDetails: [
			{
				title: "Sign up",
				description: "Sign up using your phone number"
			},
			{
				title: "Error hanlding",
				description: "Credential validation takes place on both the front and back ends"
			},
			{
				title: "Sign up",
				description: "Receieve an SMS with OTP code"
			},
			{
				title: "Sign up",
				description: "Add more account details"
			},
			{
				title: "Account",
				description: "Sign out"
			}
		],
	},
	{
		title: 'Make a video call',
		videoUrl: "/assets/call_from_contacts_full_edit_grey_rotato_4k.mp4",
		goToStep: (playedSeconds: number): number => {
			switch (true) {
				case playedSeconds < 3:
					return 0;
				case playedSeconds < 10:
					return 1;
				case playedSeconds < 16:
					return 2;
				case playedSeconds < 20:
					return 3;
				case playedSeconds < 32:
					return 4;
				case playedSeconds < 39:
					return 5;
				case playedSeconds >= 39:
					return 6;
				default: return 0;
			}
		},
		stepDetails: [
			{
				title: "Make a video call",
				description: "Select a contact"
			},
			{
				title: "Call length",
				description: "Select the maximum length of the call"
			},
			{
				title: "Make the call",
				description: "See yourself while you're waiting for it to be answered"
			},
			{
				title: "Callee answers",
			},
			{
				title: "Calling UI",
			},
			{
				title: "Background the app",
				description: "The countdown continues in the background - go back to the call via a notification"
			},
			{
				title: "End the call early",
				description: "You saved time and ended the call early! Navigate back to the dashboard"
			}
		],
	},
]

export default data;

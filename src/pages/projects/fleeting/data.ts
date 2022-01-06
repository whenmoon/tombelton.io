export interface FleetingData {
	title: string;
	goToStep: (playedSeconds: number) => number;
	videoUrl: string;
	stepDetails: StepDetail[];
};

export interface StepDetail {
	title: string;
	description: string;
}

const data: FleetingData[] = [
	{
		title: 'Sign up',
		videoUrl: "/assets/sign_up_trimmed_grey_rotato_4k.mp4",
		goToStep: (playedSeconds: number) => {
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
		goToStep: (playedSeconds: number) => {
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
]

export default data;

export interface FleetingData {
	title: string;
	goToStep: (playedSeconds: number) => number;
	videoUrl: string;
	thumbnailUrl: string;
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
		thumbnailUrl: "/assets/sign_up_thumbnail.png",
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
		videoUrl: "assets/call_from_contacts_full_edit_grey_rotato_4k.mp4",
		thumbnailUrl: "/assets/sign_up_thumbnail.png",
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
	{
		title: 'Incoming video call',
		videoUrl: "/assets/incoming_background_call_timeout_trimmed_grey_rotato_4k.mp4",
		thumbnailUrl: "/assets/sign_up_thumbnail.png",
		goToStep: (playedSeconds: number): number => {
			switch (true) {
				case playedSeconds < 5:
					return 0;
				case playedSeconds < 23:
					return 1;
				case playedSeconds >= 23:
					return 2;
				default: return 0;
			}
		},
		stepDetails: [
			{
				title: "Incoming call in background",
				description: "The device rings when the app is in the background and automatically navigates to the incoming call screen"
			},
			{
				title: "Answer",
				description: "the call can be answered either from the native phone calling UI or from the incoming callscreen UI"
			},
			{
				title: "The call ends on time",
				description: "The clock times out and the app puts itself back in to the background"
			},
		],
	},
	{
		title: 'Missed call',
		videoUrl: "/assets/missed_call_trimmed_grey_rotato_4k.mp4",
		thumbnailUrl: "/assets/sign_up_thumbnail.png",
		goToStep: (playedSeconds: number): number => {
			switch (true) {
				case playedSeconds < 5:
					return 0;
				case playedSeconds < 7:
					return 1;
				case playedSeconds >= 7:
					return 2;
				default: return 0;
			}
		},
		stepDetails: [
			{
				title: "Incoming call in background",
				description: "The device rings when the app is in the background and automatically navigates to the incoming call screen"
			},
			{
				title: "Callee cancels the call",
				description: "The outgoing call is cancelled before it can be answered"
			},
			{
				title: "Missed call",
				description: "The call is missed, the app is put in to the background and a missed call notification is shown "
			},
		],
	},
	{
		title: 'Decline the call',
		videoUrl: "/assets/decline_call_trimmed_grey_rotato_4k.mp4",
		thumbnailUrl: "/assets/sign_up_thumbnail.png",
		goToStep: (playedSeconds: number): number => {
			switch (true) {
				case playedSeconds < 5:
					return 0;
				case playedSeconds >= 5:
					return 1;
				default: return 0;
			}
		},
		stepDetails: [
			{
				title: "Incoming call in background",
				description: "The device rings when the app is in the background and automatically navigates to the incoming call screen"
			},
			{
				title: "Call declined",
				description: "The incoming call is declined and the app is put in to the background"
			},
		],
	},
	{
		title: 'Invite to Fleeting',
		videoUrl: "/assets/invite_trimmed_grey_rotato_4k.mp4",
		thumbnailUrl: "/assets/sign_up_thumbnail.png",
		goToStep: (playedSeconds: number): number => {
			switch (true) {
				case playedSeconds < 5:
					return 0;
				case playedSeconds >= 5:
					return 1;
				default: return 0;
			}
		},
		stepDetails: [
			{
				title: "Serch contacts",
				description: "Search the device for a contact that is not signed up to Fleeting"
			},
			{
				title: "Invite to Fleeting",
				description: "Selecte the conatct and send them an invitation SMS"
			},
		],
	},
	{
		title: 'Share, contact, visit',
		videoUrl: "/assets/share_trimmed_grey_rotato_4k.mp4",
		thumbnailUrl: "/assets/sign_up_thumbnail.png",
		goToStep: (playedSeconds: number): number => {
			switch (true) {
				case playedSeconds < 5:
					return 0;
				case playedSeconds < 5:
					return 1;
				case playedSeconds >= 5:
					return 2;
				default: return 0;
			}
		},
		stepDetails: [
			{
				title: "Share",
				description: "Use the native share prompt to share the app"
			},
			{
				title: "Conatct",
				description: "Contact fleeting support"
			},
			{
				title: "Visit",
				description: "Visit fleeting.com"
			},
		],
	},
]

export default data;

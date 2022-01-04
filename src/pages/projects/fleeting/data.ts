export interface FleetingData {
	title: string;
	step: (playedSeconds: number) => number;
	videoUrl: string;
};

const data: FleetingData[] = [
	{
		title: 'Sign Up',
		videoUrl: "/assets/sign_up_trimmed_grey_rotato_4k.mp4",
		step: (playedSeconds: number) => {
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
		}
	},
	{
		title: 'Sign Up',
		videoUrl: "/assets/sign_up_trimmed_grey_rotato_4k.mp4",
		step: (playedSeconds: number) => {
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
		}
	},
]

export default data;

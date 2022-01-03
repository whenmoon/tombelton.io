export interface FleetingData {
	title: string;
	step: (playedSeconds: number) => number;
};

const data: FleetingData[] = [
	{
		title: 'Sign Up',
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
		},
	}
]

export default data;

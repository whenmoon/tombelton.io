import ReactPlayer from 'react-player/lazy'

interface Props {
	setPlayedSecconds: (playedSeconds: number) => void;
	playing: boolean;
}

interface PlayerProgressEvent {
	played: number;
	playedSeconds: number;
	loaded: number;
	loadedSeconds: number;
}

export default function VideoPlayer(props: Props) {
	const { setPlayedSecconds, playing } = props;

	function onProgress(event: PlayerProgressEvent) {
		setPlayedSecconds(event.playedSeconds)
	}

	return (
		<ReactPlayer
			url="/assets/sign_up_trimmed_grey_rotato_4k.mp4"
			height={700}
			width={400}
			controls={false}
			playing={playing}
			muted
			loop
			//playbackRate={1.25}
			onProgress={onProgress}
			progressInterval={1000}
		/>
	)
}

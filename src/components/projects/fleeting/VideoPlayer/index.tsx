import { ReactElement } from 'react';
import ReactPlayer from 'react-player/lazy'
import styles from './styles.module.css'

interface Props {
	setPlayedSecconds: (playedSeconds: number) => void;
	playing: boolean;
	videoUrl: string;
}

interface PlayerProgressEvent {
	played: number;
	playedSeconds: number;
	loaded: number;
	loadedSeconds: number;
}

export default function VideoPlayer(props: Props): ReactElement {
	const { setPlayedSecconds, playing, videoUrl } = props;

	function onProgress(event: PlayerProgressEvent): void {
		setPlayedSecconds(event.playedSeconds)
	}

	return (
		<div className={styles.fleetingFeaturePanelVideoContainer} >
			<ReactPlayer
				url={videoUrl}
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
		</div>
	)
}

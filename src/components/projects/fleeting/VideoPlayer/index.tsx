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
		setPlayedSecconds(Math.round(event.playedSeconds))
	}

	return (
		<div className={styles.fleetingFeatureVideoContainer}>
			<div className={styles.fleetingFeatureVideo} >
				<ReactPlayer
					url={videoUrl}
					height="100%"
					width="100%"
					controls={false}
					playing={playing}
					muted
					loop
					onProgress={onProgress}
					progressInterval={1000}
				/>
			</div>
		</div>
	)
}

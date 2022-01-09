import { ReactElement, useState } from 'react';
import ReactPlayer from 'react-player/lazy'
import styles from './styles.module.css'
import ClockLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/react";
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
	const [loading, setLoading] = useState(false);
	const { setPlayedSecconds, playing, videoUrl } = props;

	function onReady(): void {
		setLoading((prevState) => !prevState);
	}

	console.log('loading -------------------->', loading);

	function onProgress(event: PlayerProgressEvent): void {
		setPlayedSecconds(Math.round(event.playedSeconds))
	}

	const loader = (
		<div className={styles.loaderContainer}>
			<ClockLoader loading size={40} />
		</div>
	);

	return (
		<div className={styles.fleetingFeatureVideoContainer}>
			<div className={styles.fleetingFeatureVideo}>
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
					onReady={onReady}
					fallback={loader}
				/>
			</div>
			{/*{loader}*/}
		</div>
	)
}

import { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy'
import styles from './styles.module.css'
import VideoPlayerThumbnail from '../../../VideoPlayerThumbnail/VideoPlayerThumbnail';
interface Props {
	setPlayedSecconds: (playedSeconds: number) => void;
	isVisible: boolean;
	videoUrl: string;
	thumbnailUrl: string;
	setOverlayVideoLoader: Dispatch<SetStateAction<boolean>>
}

interface PlayerProgressEvent {
	played: number;
	playedSeconds: number;
	loaded: number;
	loadedSeconds: number;
}

export default function VideoPlayer(props: Props): ReactElement {
	const [playClicked, setPlayClicked] = useState(false);
	const [playingBack, setPlayingBack] = useState(false);
	const {
		setPlayedSecconds,
		isVisible,
		videoUrl,
		thumbnailUrl,
		setOverlayVideoLoader
	} = props;

	useEffect(() => {
		if (playClicked && !playingBack) {
			setOverlayVideoLoader(true);
		} else {
			setOverlayVideoLoader(false);
		}
	}, [playClicked, playingBack, setOverlayVideoLoader])

	function onProgress(event: PlayerProgressEvent): void {
		setPlayedSecconds(Math.round(event.playedSeconds))
	}

	function playVideo(): void {
		console.log('playVideo -------------------->');
		setPlayClicked(true)
	}

	function onPlay() {
		console.log('onPlay -------------------->',);
		setPlayingBack(true);
	}

	return (
		<div className={styles.fleetingFeatureVideo}>
			<ReactPlayer
				url={videoUrl}
				height="100%"
				width="100%"
				controls={false}
				playing={playClicked && isVisible}
				muted
				loop
				onProgress={onProgress}
				progressInterval={1000}
				light
				playIcon={
					<div onClick={playVideo} style={{ zIndex: 999 }}>
						<VideoPlayerThumbnail thumbnailUrl={thumbnailUrl} />
					</div>
				}
				onPlay={onPlay}
			/>
		</div>
	)
}

import { ReactElement, useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy'
import styles from './styles.module.css'
import Loader from '../../../Loader/Loader';
import VideoPlayerThumbnail from '../../../VideoPlayerThumbnail/VideoPlayerThumbnail';
interface Props {
	setPlayedSecconds: (playedSeconds: number) => void;
	playing: boolean;
	videoUrl: string;
	thumbnailUrl: string;
}

interface PlayerProgressEvent {
	played: number;
	playedSeconds: number;
	loaded: number;
	loadedSeconds: number;
}

export default function VideoPlayer(props: Props): ReactElement {
	const [play, setPlay] = useState(false)
	const { setPlayedSecconds, playing, videoUrl, thumbnailUrl } = props;

	function onReady(): void {
		console.log('Ready -------------------->');
	}

	useEffect(() => {
		console.log('NOT Ready -------------------->');
	}, [])


	function onProgress(event: PlayerProgressEvent): void {
		setPlayedSecconds(Math.round(event.playedSeconds))
	}

	function playVideo(): void {
		console.log('playVideo -------------------->');
		setPlay(true)
	}

	console.log('thumbnailUrl -------------------->', thumbnailUrl);
	return (
		<>
			<div>
				<div className={styles.fleetingFeatureVideo}>
					<ReactPlayer
						url={videoUrl}
						height="100%"
						width="100%"
						controls={false}
						playing={play && playing}
						muted
						loop
						onProgress={onProgress}
						progressInterval={1000}
						onReady={onReady}
						fallback={<Loader />}
						light
						playIcon={
							<div onClick={playVideo} style={{ zIndex: 999 }}>
								<VideoPlayerThumbnail thumbnailUrl={thumbnailUrl} />
							</div>
						}
					/>
				</div>
			</div >
		</>
	)
}

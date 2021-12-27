import ReactPlayer from 'react-player/lazy'

interface Props {

}

export default function VideoPlayer(props: Props) {
	return (
		<>
			{/*<input type="file" onChange={handleVideoUpload} />*/}
			<ReactPlayer
				url="/assets/sign_up_trimmed_white_rotato_4k.mp4"
				width="100%"
				height="100%"
				controls={false}
				playing
				muted
			/>
		</>
	)
}

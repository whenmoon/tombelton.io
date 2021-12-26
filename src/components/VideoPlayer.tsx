import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'

interface Props {

}

export default function VideoPlayer(props: Props) {
	//const [videoUrl, setVideoUrl] = useState<string>('')
	//useEffect(() => {
	//	setTimeout(() => {
	//		//setVideoUrl('..src/assets/sign_up_trimmed_rotato_4k.mp4')
	//		setVideoUrl(URL.createObjectURL('..src/assets/sign_up_trimmed_rotato_4k.mp4'));
	//	}, 1000);
	//}, [])

	//const handleVideoUpload = (event: any) => {
	//	const [file] = event.target.files;
	//	setVideoUrl(URL.createObjectURL(file));
	//};

	return (
		<>
			{/*<input type="file" onChange={handleVideoUpload} />*/}
			<ReactPlayer
				url="/assets/sign_up_trimmed_rotato_4k.mp4"
				width="100%"
				height="100%"
				controls={true}
				playing
				muted
			/>
		</>
	)
}
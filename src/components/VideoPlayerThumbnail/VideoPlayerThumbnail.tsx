/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './styles.module.css';

interface Props {
	thumbnailUrl: string;
}

export default function VideoPlayerThumbnail(props: Props) {
	const { thumbnailUrl } = props;
	return (
		<div className={styles.imageContainer}>
			<img
				src={thumbnailUrl}
				alt={thumbnailUrl}
				className={styles.image}
			/>
		</div>
	)
};

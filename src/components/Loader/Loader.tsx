import ClockLoader from "react-spinners/ClockLoader";
import styles from './styles.module.css'

interface Props {
	loading?: boolean;
}

export default function Loader(props: Props) {
	const loader = (
		<div className={styles.loaderContainer}>
			<ClockLoader loading size={40} />
		</div>
	);
	return loader;
}

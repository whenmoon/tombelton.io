import { ReactElement } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import styles from './styles.module.css'

interface Props {
	loading?: boolean;
}

export default function Loader(props: Props): ReactElement {
	const loader = (
		<div className={styles.loaderContainer}>
			<PropagateLoader loading size={18} />
		</div>
	);
	return loader;
}
7
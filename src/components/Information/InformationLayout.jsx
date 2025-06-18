import styles from './InformationLayout.module.css';

export const InformationLayout = () => {
	return (
		<h2 className={styles.information}>
			Текущий ход: <span>X</span>
		</h2>
	);
};

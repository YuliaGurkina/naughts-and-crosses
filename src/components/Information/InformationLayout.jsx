import styles from './InformationLayout.module.css';

export const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
	return (
		<h2 className={styles.information}>
			{isDraw
				? 'Ничья'
				: isGameEnded
					? `Победа: ${currentPlayer}`
					: `Ходит: ${currentPlayer}`}
		</h2>
	);
};
//Текущий ход: <span>{currentPlayer}</span>

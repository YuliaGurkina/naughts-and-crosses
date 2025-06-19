import styles from './InformationLayout.module.css';

import PropTypes from 'prop-types';

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

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
};

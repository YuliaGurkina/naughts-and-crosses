import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './InformationLayout.module.css';

export const InformationLayout = () => {
	const currentPlayer = useSelector((state) => state.currentPlayer);
	const isGameEnded = useSelector((state) => state.isGameEnded);
	const isDraw = useSelector((state) => state.isDraw);

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

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './InformationLayout.module.css';
import { store } from '../../store';
import { subscriber } from '../../subscriber';

export const InformationLayout = () => {
	const [appStore, setAppStore] = useState(store.getState());

	useEffect(() => {
		subscriber(setAppStore);
	}, []);

	const { currentPlayer, isGameEnded, isDraw } = appStore;
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

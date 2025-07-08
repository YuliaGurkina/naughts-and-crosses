import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './FieldLayout.module.css';
import { store } from '../../store';
import { subscriber } from '../../subscriber';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

export const FieldLayout = () => {
	const { field, isGameEnded } = store.getState();
	const [appStore, setAppStore] = useState(store.getState());

	useEffect(() => {
		subscriber(setAppStore);
	}, []);

	const checkIsWinner = (newFields) => {
		return WIN_PATTERNS.some((item) => {
			const [a, b, c] = [...item];
			return (
				newFields[a].length &
				newFields[b].length &
				newFields[c].length &
				(newFields[a] === newFields[b]) &
				(newFields[a] === newFields[c])
			);
		});
	};
	const onFieldItemClick = (event) => {
		const index = event.target.dataset.index;
		if (!field[index] && !isGameEnded) {
			let newFields = [...appStore.field]; // Create a shallow copy
			newFields[index] = appStore.currentPlayer; // Modify the copy
			isWinner = checkIsWinner(newFields);
			if (!isWinner & !isFieldsFull) {
				console.log('change player');

				store.dispatch({
					type: 'SET_CURRENT_PLAYER',
					payload: appStore.currentPlayer === 'X' ? '0' : 'X',
				});
				console.log('currentPlayer', appStore.currentPlayer);
			}

			store.dispatch({
				type: 'SET_FIELD',
				payload: newFields,
			});
			console.log(appStore);
		}
	};

	const isFieldsFull = field.every((item) => {
		return item.length > 0;
	});

	let isWinner = checkIsWinner(field);
	if (isWinner && !appStore.isGameEnded) {
		store.dispatch({
			type: 'SET_IS_GAME_ENDED',
			payload: true,
		});
	}

	if (isFieldsFull & !isWinner) {
		store.dispatch({
			type: 'SET_IS_DRAW',
			payload: true,
		});
	}

	return (
		<div className={styles.field}>
			{field.map((item, index) => {
				return (
					<div
						className={styles['field-item']}
						onClick={onFieldItemClick}
						data-index={index}
						key={`${index}-${item}`}
					>
						{item}
					</div>
				);
			})}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.bool,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
};

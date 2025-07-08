import { Information } from '../Information/Information';
import { Field } from '../Field/Field';
import { store } from '../../store';

import styles from './GameLayout.module.css';
import IconRestart from '../../assets/icon-restart.svg?react';

import PropTypes from 'prop-types';

export const GameLayout = () => {
	const onButtonResetClick = () => {
		store.dispatch({
			type: 'RESTART_GAME',
		});
	};
	return (
		<div className={styles.app}>
			<Information />
			<Field />
			<button className={styles.button} onClick={onButtonResetClick}>
				Начать заново <IconRestart />
			</button>
		</div>
	);
};

GameLayout.propTypes = {
	setField: PropTypes.func,
	setCurrentPlayer: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
};

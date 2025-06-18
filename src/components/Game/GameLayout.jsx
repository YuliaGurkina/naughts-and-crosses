import { Information } from '../Information/Information';
import { Field } from '../Field/Field';

import styles from './GameLayout.module.css';
import IconRestart from '../../assets/icon-restart.svg?react';

export const GameLayout = ({ field, currentPlayer, isGameEnded, isDraw }) => {
	return (
		<div className={styles.app}>
			<Information
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<Field field={field} />
			<button className={styles.button}>
				Начать заново <IconRestart />
			</button>
		</div>
	);
};

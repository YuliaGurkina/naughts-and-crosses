import { Information } from '../Information/Information';
import { Field } from '../Field/Field';

import styles from './GameLayout.module.css';
import IconRestart from '../../assets/icon-restart.svg?react';

export const GameLayout = () => {
	return (
		<div className={styles.app}>
			<Information />
			<Field />
			<button className={styles.button}>
				Начать заново <IconRestart />
			</button>
		</div>
	);
};

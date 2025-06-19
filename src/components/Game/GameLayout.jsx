import { Information } from '../Information/Information';
import { Field } from '../Field/Field';

import styles from './GameLayout.module.css';
import IconRestart from '../../assets/icon-restart.svg?react';

export const GameLayout = (props) => {
	const onButtonResetClick = () => {
		props.setCurrentPlayer('X');
		props.setIsGameEnded(false);
		props.setIsDraw(false);
		props.setField(['', '', '', '', '', '', '', '', '']);
	};
	return (
		<div className={styles.app}>
			<Information {...props} />
			<Field {...props} />
			<button className={styles.button} onClick={onButtonResetClick}>
				Начать заново <IconRestart />
			</button>
		</div>
	);
};

import { GameLayout } from './GameLayout';
import { useState } from 'react';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);

	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	return (
		<GameLayout
			field={field}
			onSetField={setField}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
		/>
	);
};

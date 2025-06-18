import { GameLayout } from './GameLayout';
import { useState } from 'react';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);

	let field = ['', '', '', '', '', '', '', '', ''];

	return (
		<GameLayout
			field={field}
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
		/>
	);
};

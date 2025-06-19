import styles from './FieldLayout.module.css';

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

let isWinner = false;

export const FieldLayout = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	setIsDraw,
}) => {
	const onFieldItemClick = (event) => {
		const index = event.target.dataset.index;
		if (!field[index] && !isGameEnded) {
			setField((prevFields) => {
				const newFields = [...prevFields]; // Create a shallow copy
				newFields[index] = currentPlayer; // Modify the copy
				isWinner = WIN_PATTERNS.some((item) => {
					const [a, b, c] = [...item];
					return (
						newFields[a].length &
						newFields[b].length &
						newFields[c].length &
						(newFields[a] === newFields[b]) &
						(newFields[a] === newFields[c])
					);
				});
				if (!isWinner & !isFieldsFull) {
					//console.log('change player');
					setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
				}
				return newFields; // Update the state with the new array
			});
		}
	};

	const isFieldsFull = field.every((item) => {
		return item.length > 0;
	});

	if (isWinner) {
		//console.log('winner');
		setIsGameEnded(true);
	}

	if (isFieldsFull & !isWinner) {
		//console.log('draw');
		setIsDraw(true);
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

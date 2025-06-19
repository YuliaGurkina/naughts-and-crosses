import styles from './FieldLayout.module.css';

export const FieldLayout = ({
	field,
	onSetField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
}) => {
	const onFieldItemClick = (event) => {
		const index = event.target.dataset.index;
		if (!field[index] && !isGameEnded) {
			onSetField((prevFields) => {
				const newFields = [...prevFields]; // Create a shallow copy
				newFields[index] = currentPlayer; // Modify the copy
				return newFields; // Update the state with the new array
			});
			setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
		}
	};

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

/* <div className={styles['field-item'] + ' ' + styles.filled}>X</div>*/

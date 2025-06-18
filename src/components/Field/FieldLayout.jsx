import styles from './FieldLayout.module.css';

export const FieldLayout = ({ field }) => {
	return (
		<div className={styles.field}>
			{field.map((item) => {
				return <div className={styles['field-item']}>{item}</div>;
			})}
		</div>
	);
};

/* <div className={styles['field-item'] + ' ' + styles.filled}>X</div>*/

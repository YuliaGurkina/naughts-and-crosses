import styles from './FieldLayout.module.css';

export const FieldLayout = () => {
	return (
		<div className={styles.field}>
			<div className={styles['field-item'] + ' ' + styles.filled}>X</div>
			<div className={styles['field-item']}></div>
			<div className={styles['field-item']}></div>
			<div className={styles['field-item']}></div>
			<div className={styles['field-item'] + ' ' + styles.filled}>O</div>
			<div className={styles['field-item']}></div>
			<div className={styles['field-item']}></div>
			<div className={styles['field-item']}></div>
			<div className={styles['field-item']}></div>
		</div>
	);
};

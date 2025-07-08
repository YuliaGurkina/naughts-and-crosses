import { store } from './store';

export const subscriber = (onChangeAppStore) => {
	const unsubscribe = store.subscribe(() => onChangeAppStore(store.getState()));
	return () => {
		unsubscribe();
	};
};

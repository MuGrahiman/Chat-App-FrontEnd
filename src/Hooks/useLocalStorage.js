import React, { useState, useEffect } from 'react';

const PREFIX = 'CHAT-APP-CLONE-';

const useLocalStorage = (key, initialValue = null) => {
	const prefixedKey = PREFIX + key;
	const [value, setValue] = useState(() => {
		const jsonValue = localStorage.getItem(prefixedKey);

		if (jsonValue != null && jsonValue !== 'null' && jsonValue !== 'undefined')
			return JSON.parse(jsonValue);
		if (typeof initialValue === 'function') return initialValue();
		else return initialValue;
	});

	useEffect(() => {
		localStorage.setItem(prefixedKey, JSON.stringify(value));
	}, [prefixedKey, value]);
	return [value, setValue];
};

export default useLocalStorage;

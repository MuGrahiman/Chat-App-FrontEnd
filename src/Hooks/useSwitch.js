// useSwitch.js
import { useCallback } from "react";

const useSwitch = (cases) => {
	const handleSwitch = useCallback(
		(value) => {
			for (const key in cases) {
				if (value === key && cases[key]) {
					return cases[key];
				}
			}
			return cases.default || null;
		},
		[cases]
	);

	return handleSwitch;
};

export default useSwitch;

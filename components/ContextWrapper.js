import NavContext from '../context/NavContext';

import { useState } from 'react';

function ContextWrapper({ children, navigation }) {
	const [menuItems] = useState(navigation);

	return (
		<NavContext.Provider value={[menuItems]}>{children}</NavContext.Provider>
	);
}

export default ContextWrapper;

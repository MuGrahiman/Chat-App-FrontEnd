import React, { useContext } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';

const ContactsContext = React.createContext();
const ContactsProvider = ({ children }) => {
	const [contacts, setContacts] = useLocalStorage('contacts', []);
	const createContact = (id, name) => {
		setContacts((prevContact) => [...prevContact, { id, name }]);
	};
	return (
		<ContactsContext.Provider value={{ contacts, createContact }}>
			{children}
		</ContactsContext.Provider>
	);
};

export const useContacts = () => useContext(ContactsContext);

export default ContactsProvider;

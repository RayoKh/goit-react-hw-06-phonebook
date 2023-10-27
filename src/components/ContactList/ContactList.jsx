import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilters } from 'redux/selector';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilters);

  const getFilteredContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const filteredContact = getFilteredContact();

  return (
    <ul>
      {filteredContact.map(contact => {
        return (
          <Contact
            key={contact.id}
            contact={contact}
            onDeleteContact={() => dispatch(deleteContact(contact.id))}
          />
        );
      })}
    </ul>
  );
};

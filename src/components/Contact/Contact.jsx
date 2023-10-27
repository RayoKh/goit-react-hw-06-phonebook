import { ContactItem, ListItem } from './Contact.styled';

export const Contact = ({ contact, onDeleteContact }) => (
  <ListItem>
    <ContactItem>
      {contact.name}: {contact.number}
    </ContactItem>
    <button onClick={() => onDeleteContact(contact.id)}>Видалити</button>
  </ListItem>
);

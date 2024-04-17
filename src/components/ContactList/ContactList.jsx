import Contact from '../Contact/Contact';
import css from '../ContactList/ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.classList}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

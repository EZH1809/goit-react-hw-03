import { PiAddressBookDuotone } from 'react-icons/pi';
import { PiPhoneDuotone } from 'react-icons/pi';
import css from './Contact.module.css';

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.textContainer}>
        <p>
          <PiAddressBookDuotone /> {name}
        </p>
        <p>
          <PiPhoneDuotone /> {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
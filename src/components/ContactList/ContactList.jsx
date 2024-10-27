import { useSelector } from 'react-redux'
import { selectFilteredContacts, selectIsLoading, selectError } from '../../redux/selectors'
import Contact from '../Contact/Contact'
import css from './ContactList.module.css'

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
 
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (filteredContacts.length > 0) {
    return (
      <ul className={css.list}>
        {filteredContacts.map(({ name, number, id }) => (
          <li key={id} className={css.contact}>
            <Contact name={name} number={number} id={id} />
            </li>          
        ))}
      </ul>
    );
  }
}

export default ContactList
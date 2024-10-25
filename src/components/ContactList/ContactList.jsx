import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
import styles from "./ContactList.module.css";
import ContactItem from "../ContactItem/ContactItem";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.contacts}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <li className={styles.item} key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        ))
      ) : (
        <div className={styles.text}>No contacts!</div>
      )}
    </ul>
  );
};

export default ContactList;

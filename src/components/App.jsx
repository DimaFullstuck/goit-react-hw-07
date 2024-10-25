import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contactsOps";
import { selectError, selectIsLoading } from "../redux/selectors";
import Infinity from "./Infinity/Infinity";
import TitleSection from "./TitleSection/TitleSection";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import { SEARCH_LABEL, TITLE } from "../js/constants";
import SearchBox from "./SearchBox/SearchBox";
import { Toaster } from "react-hot-toast";
import { errNotify } from "../notification/error-notify";
import styles from "./App.module.css";

function App() {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .catch(() => {
        errNotify("Error fetching contacts");
      });
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Toaster />
      <TitleSection>{TITLE}</TitleSection>
      <ContactForm />
      <SearchBox>{SEARCH_LABEL}</SearchBox>
      {isLoading && !error && <Infinity isLoading={isLoading} />}
      <ContactList />
    </div>
  );
}

export default App;

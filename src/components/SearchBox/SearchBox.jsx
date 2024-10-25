import { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filterSlice';
import styles from './SearchBox.module.css';

const SearchBox = ({ children }) => {
  const searchId = useId();
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  const handleChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <form className={styles.searchbox}>
      <label className={styles.label} htmlFor={searchId}>
        {children}
      </label>
      <input
        className={styles.input}
        id={searchId}
        type="text"
        value={nameFilter}
        onChange={handleChangeFilter}
      />
    </form>
  );
};

export default SearchBox;

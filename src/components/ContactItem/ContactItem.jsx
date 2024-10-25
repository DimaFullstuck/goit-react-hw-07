import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUser, FaPhone } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsOps.js";
import CustomButton from "../CustomButton/CustomButton";
import { selectDeletingItem, selectError } from "../../redux/selectors.js";
import { CAPTION_DELETE, CAPTION_DELETEING } from "../../js/constants";
import { SUCCESS_DELETE, ERR_DELETE } from "../../notification/constants.js";
import { errNotify } from "../../notification/error-notify.js";
import { successNotify } from "../../notification/success-notify.js";
import styles from "./ContactItem.module.css";

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const isError = useSelector(selectError);
  const isOperation = useSelector(selectDeletingItem) === id;
  const handleDeleteItem = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        successNotify(SUCCESS_DELETE);
      })
      .catch(() => {
        errNotify(ERR_DELETE);
      });
  };

  return (
    <React.Fragment>
      <div className={styles.info}>
        <p className={styles.name}>
          <FaUser /> {name}
        </p>
        <p className={styles.phone}>
          <FaPhone /> {number}
        </p>
      </div>
      <CustomButton onClick={handleDeleteItem} typeBtn={"button"}>
        {isOperation && !isError ? CAPTION_DELETEING : CAPTION_DELETE}
      </CustomButton>
    </React.Fragment>
  );
};

export default ContactItem;

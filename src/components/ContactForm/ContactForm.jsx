import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addContact } from "../../redux/contactsOps";

import { INITIAL_CONTACT } from "../../js/constants";
import { FeedbackSchema } from "../../js/schema";
import {
  LABEL_NAME,
  LABEL_PHONE,
  CAPTION_ADD,
  CAPTION_ADDING,
} from "../../js/constants";
import { selectError, selectIsAdding } from "../../redux/selectors";
import { successNotify } from "../../notification/success-notify";
import { errNotify } from "../../notification/error-notify";
import { SUCCESS_ADD, ERR_ADD } from "../../notification/constants";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const nameId = useId();
  const phoneId = useId();
  const dispatch = useDispatch();

  const isOperation = useSelector(selectIsAdding);
  const isError = useSelector(selectError);

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        successNotify(SUCCESS_ADD);
      })
      .catch(() => {
        errNotify(ERR_ADD);
      });
    !isError && actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_CONTACT}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={styles.contactform}>
        <div className={styles.info}>
          <div>
            <label className={styles.label} htmlFor={nameId}>
              {LABEL_NAME}
            </label>
            <Field
              className={styles.input}
              id={nameId}
              type="text"
              name="name"
            />
            <span className={styles.error}>
              <ErrorMessage name="name" as="span" />
            </span>
          </div>
          <div>
            <label className={styles.label} htmlFor={phoneId}>
              {LABEL_PHONE}
            </label>
            <Field
              className={styles.input}
              id={phoneId}
              type="tel"
              name="number"
            />
            <span className={styles.error}>
              <ErrorMessage name="number" as="span" />
            </span>
          </div>
        </div>
        <CustomButton typeBtn="submit">
          {isOperation && !isError ? CAPTION_ADDING : CAPTION_ADD}
        </CustomButton>
      </Form>
    </Formik>
  );
};

export default ContactForm;

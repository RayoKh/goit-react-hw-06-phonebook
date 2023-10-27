import { Formik, useFormik } from 'formik';
import {
  StyledForm,
  SubmitBtn,
  StyledLabel,
  StyledField,
  ErrorMsg,
} from './ContactForm.styled';
import * as yup from 'yup';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';

const Schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Please check that the name you have dialed is correct'
    ),
  number: yup
    .string()
    .required()
    .trim()
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Please check that the number you have dialed is correct'
    ),
});

export const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
  });

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      resetForm();
      return alert(`${values.name} is already in contacs.`);
    }
    if (contacts.some(contact => contact.number === values.number)) {
      resetForm();
      return alert(`This number "${values.number}" is already in contacs.`);
    }

    dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      })
    );

    resetForm();
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <Formik
      initialValues={formik.initialValues}
      onSubmit={handleSubmit}
      validationSchema={Schema}
    >
      <StyledForm>
        <StyledLabel>
          Name
          <StyledField id={nameId} type="text" name="name" />
          <ErrorMsg name="name" component="div" />
        </StyledLabel>

        <StyledLabel>
          Number
          <StyledField id={numberId} type="tel" name="number" />
          <ErrorMsg name="number" component="div" />
        </StyledLabel>

        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </StyledForm>
    </Formik>
  );
};

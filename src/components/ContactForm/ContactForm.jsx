import { Formik } from 'formik';
import {
  StyledForm,
  SubmitBtn,
  StyledLabel,
  StyledField,
  ErrorMsg,
} from './ContactForm.styled';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Please check that the name you have dialed is correct'
    )
    .required('Required!'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Please check that the number you have dialed is correct'
    )
    .required('Required!'),
});

export function ContactForm({ onSubmit }) {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <StyledLabel>
            Name
            <StyledField type="text" id="name" name="name" required />
            <ErrorMsg name="name" component="div" className="error" />
          </StyledLabel>
          <StyledLabel>
            Number
            <StyledField type="tel" id="number" name="number" required />
            <ErrorMsg name="number" component="div" className="error" />
          </StyledLabel>
          <SubmitBtn type="submit" disabled={isSubmitting}>
            Add contact
          </SubmitBtn>
        </StyledForm>
      )}
    </Formik>
  );
}

import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 320px;
  padding: 8px;
`;

export const SubmitBtn = styled.button`
    width: 92px;
`;

export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
`;

export const StyledField = styled(Field)`
    width: 120px;
    padding: 4px;
`;

export const ErrorMsg = styled(ErrorMessage)`
    color: red;
    font-size: 14px;
`;
import React from 'react';
import { FormStyle } from '../Styles/form.styled';

const Form = ({ children, ...props }) => {
    return (
        <FormStyle>
            <form {...props}>{children}</form>
        </FormStyle>
    );
};

export default Form;

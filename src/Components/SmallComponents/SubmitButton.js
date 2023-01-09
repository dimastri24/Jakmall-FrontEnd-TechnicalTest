import React from 'react';
import { Button } from '../Styles/form.styled';

const SubmitButton = ({ children, ...props }) => {
    return (
        <Button type="submit" {...props}>
            {children}
        </Button>
    );
};

export default SubmitButton;

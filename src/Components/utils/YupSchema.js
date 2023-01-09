import * as yup from 'yup';
import { emailPatern, phonePatern } from './constants';

export const yupSchema1 = yup.object().shape({
    email: yup
        .string()
        .required('Please enter an email address')
        .matches(emailPatern, 'Email Invalid'),
    dropshipperName: yup.string().required('Please enter the dropshipper name'),
    phoneNumber: yup
        .string()
        .required('Please enter your phone number')
        .matches(phonePatern, {
            message: 'Invalid phone number',
            excludeEmptyString: true,
        }),
    dropshipperPhone: yup
        .string()
        .required('Please enter the dropshipper phone number')
        .matches(phonePatern, {
            message: 'Invalid phone number',
            excludeEmptyString: true,
        }),
    deliveryAddress: yup
        .string()
        .required('Please enter your address')
        .max(120, 'Address too long. Please enter under 120 character'),
});

export const yupSchema2 = yup.object().shape({
    shipment: yup
        .string('Please select a shipment method')
        .required('Please select a shipment method')
        .nullable(),
});

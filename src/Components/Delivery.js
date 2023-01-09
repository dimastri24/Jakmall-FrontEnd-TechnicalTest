import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useData } from '../DataContext';
import Form from './SmallComponents/Form';
import {
    Checkbox,
    CheckboxInput,
    FormControl,
    FlexContainer,
    Input,
    Section,
    Title,
} from './Styles/form.styled';
import SubmitButton from './SmallComponents/SubmitButton';
import BackButton from './SmallComponents/BackButton';
import { yupSchema1 } from './utils/YupSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { DEFAULT_STATE } from './utils/constants';

const Delivery = ({ checkedDropship }) => {
    const { setValues } = useData();

    const { register, handleSubmit, errors } = useForm({
        defaultValues: DEFAULT_STATE,
        mode: 'onBlur',
        resolver: yupResolver(yupSchema1),
    });

    const navigate = useNavigate();

    const checkboxInput = (e) => {
        checkedDropship(e.target.checked);
    };

    const onSubmit = (data) => {
        setValues(data);
        navigate('/payment');
    };

    return (
        <>
            <BackButton margin caption={'Back to cart'} />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Section>
                    <Title>Delivery details</Title>
                    <Checkbox>
                        <CheckboxInput
                            type={'checkbox'}
                            ref={register}
                            id="checkboxDropshipper"
                            name="isDropshipper"
                            onChange={(e) => checkboxInput(e)}
                        />
                        <label htmlFor="checkboxDropshipper">
                            Send as dropshipper
                        </label>
                    </Checkbox>
                </Section>
                <FlexContainer>
                    <FormControl>
                        <Input
                            type={'email'}
                            ref={register}
                            id="email"
                            name="email"
                            placeholder="Email"
                            error={errors?.email}
                            // value={data?.email}
                            // autoComplete="off"
                        />
                    </FormControl>
                    <FormControl>
                        <Input
                            type={'text'}
                            ref={register}
                            id="dropshipperName"
                            name="dropshipperName"
                            placeholder="Dropshiper Name"
                            error={errors?.dropshipperName}
                            // value={data?.dropshipperName}
                        />
                    </FormControl>
                    <FormControl>
                        <Input
                            type={'text'}
                            ref={register}
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            error={errors?.phoneNumber}
                            // value={data?.phoneNumber}
                            // autoComplete="off"
                        />
                    </FormControl>
                    <FormControl>
                        <Input
                            type={'text'}
                            ref={register}
                            id="dropshipperPhone"
                            name="dropshipperPhone"
                            placeholder="Dropshiper Phone Number"
                            error={errors?.dropshipperPhone}
                            // value={data?.dropshipperPhone}
                        />
                    </FormControl>
                    <FormControl>
                        <Input
                            type={'text'}
                            ref={register}
                            id="deliveryAddress"
                            name="deliveryAddress"
                            placeholder="Delivery Address"
                            error={errors?.deliveryAddress}
                            // value={data?.deliveryAddress}
                            textarea
                        />
                    </FormControl>
                </FlexContainer>
                <SubmitButton>Continue to Payment</SubmitButton>
            </Form>
        </>
    );
};

export default Delivery;

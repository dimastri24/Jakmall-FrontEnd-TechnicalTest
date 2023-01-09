import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { useData } from '../DataContext';
import Form from './SmallComponents/Form';
import {
    Card,
    CardInfo,
    ErrMsg,
    GridContainer,
    Radio,
    Section,
    Title,
} from './Styles/form.styled';
import SubmitButton from './SmallComponents/SubmitButton';
import BackButton from './SmallComponents/BackButton';
import { yupSchema2 } from './utils/YupSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { DEFAULT_STATE, PAYMENT } from './utils/constants';

const Payment = ({ selectShipment }) => {
    const { setValues } = useData();
    const [payment, setPayment] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    let paymentDetail;

    const handleChangePayment = (e) => {
        setPayment(e.target.value);
    };

    const handleChangeShipment = (e) => {
        selectShipment(e.target.value);
    };

    const { register, handleSubmit, errors } = useForm({
        defaultValues: DEFAULT_STATE,
        mode: 'onBlur',
        resolver: yupResolver(yupSchema2),
    });

    const onSubmit = (data) => {
        setValues(data);
        navigate('/finish', { state: { from: location }, replace: true });
    };

    if (payment === 'ewallet') {
        paymentDetail = PAYMENT.ewallet.name;
    } else if (payment === 'bank') {
        paymentDetail = PAYMENT.bank.name;
    } else if (payment === 'virtual') {
        paymentDetail = PAYMENT.virtual.name;
    }

    return (
        <>
            <BackButton
                margin
                caption={'Back to delivery'}
                onClick={() => navigate('/')}
            />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Section>
                    <Title>Shipment</Title>
                </Section>
                {errors.shipment && <ErrMsg>{errors.shipment?.message}</ErrMsg>}
                <GridContainer>
                    <Card>
                        <CardInfo>
                            <span>Go-send</span>
                            <span>15,000</span>
                        </CardInfo>
                        <Radio
                            type={'radio'}
                            name="shipment"
                            value={'gosend'}
                            ref={register}
                            onChange={(e) => handleChangeShipment(e)}
                        />
                    </Card>
                    <Card>
                        <CardInfo>
                            <span>JNE</span>
                            <span>9,000</span>
                        </CardInfo>
                        <Radio
                            type={'radio'}
                            name="shipment"
                            value={'jne'}
                            ref={register}
                            onChange={(e) => handleChangeShipment(e)}
                        />
                    </Card>
                    <Card>
                        <CardInfo>
                            <span>Personal Courier</span>
                            <span>29,000</span>
                        </CardInfo>
                        <Radio
                            type={'radio'}
                            name="shipment"
                            value={'personal'}
                            ref={register}
                            onChange={(e) => handleChangeShipment(e)}
                        />
                    </Card>
                </GridContainer>

                <Section>
                    <Title>Payment</Title>
                </Section>
                <GridContainer>
                    <Card>
                        <CardInfo>
                            <span>e-wallet</span>
                            <span>1,500,000</span>
                        </CardInfo>
                        <Radio
                            type={'radio'}
                            name="payment"
                            value={'ewallet'}
                            ref={register}
                            onChange={(e) => handleChangePayment(e)}
                        />
                    </Card>
                    <Card>
                        <CardInfo>
                            <span>Bank Transfer</span>
                        </CardInfo>
                        <Radio
                            type={'radio'}
                            name="payment"
                            value={'bank'}
                            ref={register}
                            onChange={(e) => handleChangePayment(e)}
                        />
                    </Card>
                    <Card>
                        <CardInfo>
                            <span>Virtual Account</span>
                        </CardInfo>
                        <Radio
                            type={'radio'}
                            name="payment"
                            value={'virtual'}
                            ref={register}
                            onChange={(e) => handleChangePayment(e)}
                        />
                    </Card>
                </GridContainer>
                <SubmitButton>
                    {payment
                        ? 'Pay with ' + paymentDetail
                        : 'Pay with e-wallet'}
                </SubmitButton>
            </Form>
        </>
    );
};

export default Payment;

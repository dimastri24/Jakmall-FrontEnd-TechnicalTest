import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SHIPMENT } from './utils/constants';
import { useData } from '../DataContext';
import BackButton from './SmallComponents/BackButton';
import { FinishContainer, Title } from './Styles/form.styled';

const Finish = () => {
    const { data } = useData();
    const navigate = useNavigate();

    let shipmentDetail;

    const reset = () => {
        navigate('/');
    };

    const genId = () => {
        let id = '';
        const charset = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        for (let i = 0; i < 5; i++) {
            id += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return id;
    };

    if (data?.shipment === 'gosend') {
        shipmentDetail = SHIPMENT.gosend.name;
    } else if (data?.shipment === 'jne') {
        shipmentDetail = SHIPMENT.jne.name;
    } else if (data?.shipment === 'personal') {
        shipmentDetail = SHIPMENT.personal.name;
    }

    return (
        <FinishContainer>
            <div>
                <Title>Thank You</Title>
                <p>Order ID : {genId()}</p>
                <p>Your order will be delivered today with {shipmentDetail}</p>
                <BackButton caption={'Back to homepage'} onClick={reset} />
            </div>
        </FinishContainer>
    );
};

export default Finish;

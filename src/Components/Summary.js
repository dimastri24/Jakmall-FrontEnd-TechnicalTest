import React, { useEffect, useState } from 'react';
import { useData } from '../DataContext';
import { ResultContainer } from './Styles/summary.styled';
import { Title } from './Styles/form.styled';
import { DROPSHIP, SHIPMENT, PAYMENT } from './utils/constants';

let shipmentDetail;
let shipmentCost = 0;
let dropshipCost = 0;
let paymentDetail;

const Summary = ({ checkedDropship, selectShipment }) => {
    const { data } = useData();
    const [total, setTotal] = useState(500000);

    if (selectShipment === 'gosend') {
        shipmentDetail = (
            <>
                {SHIPMENT.gosend.due} {SHIPMENT.gosend.name}
            </>
        );
        shipmentCost = SHIPMENT.gosend.cost;
    } else if (selectShipment === 'jne') {
        shipmentDetail = (
            <>
                {SHIPMENT.jne.due} {SHIPMENT.jne.name}
            </>
        );
        shipmentCost = SHIPMENT.jne.cost;
    } else if (selectShipment === 'personal') {
        shipmentDetail = (
            <>
                {SHIPMENT.personal.due} {SHIPMENT.personal.name}
            </>
        );
        shipmentCost = SHIPMENT.personal.cost;
    }

    if (checkedDropship) {
        dropshipCost = DROPSHIP;
    }

    if (data.payment === 'ewallet') {
        paymentDetail = PAYMENT.ewallet.name;
        console.log(paymentDetail);
    } else if (data.payment === 'bank') {
        paymentDetail = PAYMENT.bank.name;
    } else if (data.payment === 'virtual') {
        paymentDetail = PAYMENT.virtual.name;
    }

    useEffect(() => {
        setTotal(
            500000 +
                (checkedDropship ? DROPSHIP : 0) +
                (selectShipment ? shipmentCost : 0)
        );
    }, [checkedDropship, selectShipment]);

    return (
        <ResultContainer>
            <div>
                <Title>Summary</Title>
                <p>10 items purchased</p>
            </div>
            {selectShipment ? (
                <div className="div-border">
                    <p>Delivery estimation</p>
                    <p className="green">{shipmentDetail}</p>
                </div>
            ) : (
                <div />
            )}
            {paymentDetail ? (
                <div className="div-border">
                    <p>Payment method</p>
                    <p className="green">{paymentDetail}</p>
                </div>
            ) : (
                <div />
            )}
            <div className="div-m">
                <div className="flex">
                    <p>Cost of goods</p>
                    <p>500,000</p>
                </div>
                {checkedDropship ? (
                    <div className="flex">
                        <p>Dropshipping Fee</p>
                        <p>{dropshipCost}</p>
                    </div>
                ) : (
                    <div />
                )}
                {selectShipment ? (
                    <div className="flex">
                        <p>Shipment</p>
                        <p>{shipmentCost.toString()}</p>
                    </div>
                ) : (
                    <div />
                )}
            </div>
            <div className="flex">
                <Title>Total</Title>
                <Title>{total}</Title>
            </div>
        </ResultContainer>
    );
};

export default Summary;

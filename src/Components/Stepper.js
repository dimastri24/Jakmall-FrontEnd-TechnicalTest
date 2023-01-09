import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import '../index.css';

const StepperStyle = styled.div`
    background-color: var(--color-cream);
    /* padding: 12px 20px; */
    width: 600px;
    height: 90px;
    border-radius: 100px;
    position: absolute;
    top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StepDiv = styled.div`
    margin: 10px 14px;
    > span {
        margin-left: 14px;
        color: var(--color-orange);
        font-size: 20px;
        font-weight: 600;
    }

    .active {
        color: white;
        background-color: var(--color-orange);
        filter: brightness(100%);
    }
`;

const Number = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #ffe4b8;
    color: var(--color-orange);
    font-weight: 600;
    display: inline-flex;
    justify-content: center;
    align-items: center;
`;

const Arrow = styled.span`
    color: var(--color-orange);
    font-size: 2rem;
    font-weight: 700;
    margin: 0 20px 6px 20px;
`;

const Stepper = () => {
    const location = useLocation();

    const getActiveClass = (path) => {
        return path === location.pathname ? 'active' : '';
    };

    return (
        <StepperStyle>
            <StepDiv>
                <Number className={getActiveClass('/')}>1</Number>
                <span>Delivery</span>
            </StepDiv>
            <Arrow>&rsaquo;</Arrow>
            <StepDiv>
                <Number className={getActiveClass('/payment')}>2</Number>
                <span>Payment</span>
            </StepDiv>
            <Arrow>&rsaquo;</Arrow>
            <StepDiv>
                <Number className={getActiveClass('/finish')}>3</Number>
                <span>Finish</span>
            </StepDiv>
        </StepperStyle>
    );
};

export default Stepper;

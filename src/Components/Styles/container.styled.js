import styled from 'styled-components';

import '../../index.css';

export const ContainerStyle = styled.div`
    width: 90%;
    height: 85%;
    background-color: white;
    box-shadow: 0px 10px 24px -5px var(--color-box-shadow);
    display: flex;
    justify-content: space-around;
`;

export const Column = styled.div`
    width: 300px;
    flex-grow: ${({ flex_grow }) => flex_grow};
    margin: 20px 0;
    padding: 0 36px;
    border-left: ${(props) => (props.borderLeft ? '1px solid lightgray' : '')};
`;

import React from 'react';
import styled from 'styled-components';

const BackButtonStyle = styled.div`
    > button {
        background: none;
        color: inherit;
        border: none;
        padding: 10px;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }
    > button:hover {
        opacity: 0.8;
    }
    margin: ${(props) => (props.margin ? '1rem 0 2rem 1rem' : '5rem 0 0 0')};
`;

const BackButton = ({ caption, onClick, ...props }) => {
    return (
        <BackButtonStyle {...props}>
            <button type="button" onClick={onClick}>
                🡰 {caption}
            </button>
        </BackButtonStyle>
    );
};

export default BackButton;

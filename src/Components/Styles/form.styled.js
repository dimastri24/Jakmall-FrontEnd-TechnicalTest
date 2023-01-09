import styled, { css } from 'styled-components';

import '../../index.css';

export const FormStyle = styled.div`
    padding: 0 10px;
`;

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h2`
    color: var(--color-orange);
    font-size: 42px;
`;

export const Checkbox = styled.div`
    & > label {
        padding: 0 10px;
        cursor: pointer;
        color: gray;
    }
    & > label:hover {
        opacity: 0.8;
    }
`;

export const CheckboxInput = styled.input`
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    transition: 0.1s;
    background-color: white;
    text-align: center;
    font-weight: 600;
    color: white;
    outline: solid gray;
    &:checked {
        outline: solid #0e9700;
    }

    &:before {
        content: '✖';
    }
    &:checked:before {
        content: '✔';
        color: #0e9700;
    }

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 14px;
    margin-top: 2rem;
`;
export const FormControl = styled.div`
    position: relative;
    flex: 1;
`;

export const Input = styled.input`
    font-size: 14px;
    width: 380px;
    height: ${(props) => (props.textarea ? '100px' : '60px')};
    border: 2px solid lightgray;
    padding-left: 1rem;
    background-color: white;
    &::placeholder {
        font-size: 16px;
        color: gray;
    }
    &:hover,
    &:focus {
        box-shadow: 2px 2px 10px var(--color-box-shadow);
        outline: none;
    }

    ${(props) =>
        props.error &&
        css`
            border-color: red;
        `}
`;

// export const Label = styled.label`
//     color: gray;
//     position: absolute;
//     pointer-events: none;
//     left: 20px;
//     top: 20px;
//     transition: 0.3s ease all;

//     ${Input}:focus ~ & {
//         top: 6px;
//         left: 5px;
//         font-size: 11px;
//         opacity: 0.6;
//     }
// `;

export const GridContainer = styled.div`
    display: grid;
    grid-gap: 1em;
    margin-top: 30px;
    margin-bottom: 40px;
    max-width: 40em;
    padding: 0;
    grid-template-columns: repeat(3, 1fr);
`;

export const Card = styled.label`
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 16px;
    border: 1px solid lightgray;

    &:hover {
        box-shadow: 5px 5px 10px var(--color-box-shadow);
    }
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 1.5;
`;

export const Radio = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;

    &:checked:before {
        content: '✔';
        color: #0e9700;
    }
`;

export const FinishContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    column-gap: 10px;
    justify-content: center;
    align-items: center;
    text-align: left;

    & > div {
        padding: 0 1rem;
        line-height: 1.5;
    }

    h2 {
        margin-bottom: 1.5rem;
    }

    p {
        margin: 12px 0;
    }
`;

export const Button = styled.button`
    background-color: var(--color-orange);
    color: white;
    padding: 1rem 1.5rem;
    border: none;
    margin: 2em 0;
    cursor: pointer;
    font-size: large;
    box-shadow: 5px 5px 10px var(--color-box-shadow);

    &:hover {
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
        filter: brightness(95%);
    }
`;

export const ErrMsg = styled.span`
    color: red;
`;

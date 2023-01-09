import styled from 'styled-components';

export const ResultContainer = styled.div`
    margin-top: 4em;
    h2 {
        font-size: 38px;
    }
    p {
        color: gray;
    }
    > div {
        padding: 1rem 10px;
        line-height: 1.5;
    }
    .div-border {
        border-top: 1px solid lightgray;
    }
    .div-m {
        margin-top: 3rem;
    }
    .flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .green {
        color: #0bd95a;
        font-weight: 600;
    }
`;

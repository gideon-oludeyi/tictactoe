import styled from 'styled-components';

const SquareElement = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px solid black;
`;

export default function Square({ value, onClick }) {
    return <SquareElement onClick={onClick}>{value}</SquareElement>;
}

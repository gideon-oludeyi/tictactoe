import styled from 'styled-components';

const Board = styled.ul`
    display: grid;
    width: 16em;
    height: 16em;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
`;

export default Board;

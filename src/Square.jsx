import styled from 'styled-components';

const Square = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    border-radius: 4px;
    background-color: ${({ children: value, theme }) => {
        if (value === 'X') {
            return theme.primaryColor;
        } else if (value === 'O') {
            return theme.secondaryColor;
        } else {
            return theme.defaultColor;
        }
    }};
`;

export default Square;

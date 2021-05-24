import styled from 'styled-components';

const Button = styled.button`
    color: white;
    background-color: ${({ theme }) => theme.primaryColor};
    border: 1px solid black;
    width: 100%;
    height: 100%;
`;

export default Button;

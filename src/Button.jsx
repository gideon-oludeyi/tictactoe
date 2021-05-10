import styled from 'styled-components';

const Button = styled.button`
    color: white;
    background-color: ${({ theme }) => theme.primaryColor};
    border: 2px solid black;
`;

export default Button;

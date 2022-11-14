import styled, {css} from "styled-components";

export type ButtonVariant = 'primary'|'secundary'|'danger'|'sucess';

interface ButtonContainer{
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: 'white',
    secundary: 'gray',
    danger: 'red',
    sucess: 'green'
};

export const ButtonContainer = styled.button<ButtonContainer>`
    width: 100px;
    height: 40px;
    border-radius: 4px;
    border: 0;
    margin: 8px;

    background-color: ${props => props.theme["green-500"]};
    color: ${props => props.theme.white};

    /*${props => {
        return css`
            background-color: ${buttonVariants[props.variant]}
        `
    }}
    */
`
import styled, { css } from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    background: #20212c;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        color: #ccc;
        ${({ done }) => done ? css`text-decoration: line-through;` : css`text-decoration: initial;`}
    }
`;

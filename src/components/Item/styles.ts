import styled, { css } from 'styled-components';

interface ContainerProps {
  statuss: boolean;
}

export const Container = styled.li<ContainerProps>`
  width: 350px;
  padding: 20px;
  label {
    ${ (props) =>  props.statuss && css` text-decoration: line-through; `}
  }

  form {
    display: flex;
    justify-content: space-between;
    align-items:center;
    label {
      display: flex;
      input {
        margin-right: 10px;
      }
      
    }
  }
`;

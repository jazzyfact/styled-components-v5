import styled, { css } from "styled-components";

const Button = styled.button`
  color: white;
  background: ${(props) => (props.secondary ? "black" : "#f8049c")};
  font-weight: bolad;
  ${(props) =>
    props.large
      ? css`
          padding: 10px;
          border-radius: 5px;
          font-size: 1.5em;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1em;
        `}
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
  }
`;

export { Button };

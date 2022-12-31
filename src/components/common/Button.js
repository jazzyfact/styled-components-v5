import styled from "styled-components";

const Button = styled.button`
  color: white;
  background: ${(props) => (props.secondary ? "black" : "#f8049c")};
  font-weight: bolad;
  padding: 8px;
  border-radius: 4px;
  font-size: 1em;
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

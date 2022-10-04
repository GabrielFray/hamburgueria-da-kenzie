import styled from "styled-components";

export const ContentButton = styled.button`
  width: 107px;
  height: 40px;

  border-radius: 8px;
  background-color: var(--color-primary);
  color: #ffff;

  font-weight: 500;
  font-size: 14px;

  :hover {
    background-color: var(--color-primary-50);

    animation: pulse 1s;
    animation-iteration-count: infinite;
  }
  :focus {
    background-color: var(--color-primary-50);
    animation: pulse 1s;
    animation-iteration-count: infinite;
  }
`;

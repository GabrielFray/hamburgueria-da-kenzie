import styled from "styled-components";

export const ContentTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 0 2.5%;
  padding-bottom: 4.5%;

  border-top: 0.0625rem solid var(--gray-20);
  background-color: var(--gray-0);

  border-radius: 0rem 0rem 0.3125rem 0.3125rem;
  p {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-weight: 600;
    font-size: 0.875rem;

    padding: 0.9375rem 0.3125rem;

    span {
      font-weight: 600;
      font-size: 0.875rem;

      color: var(--gray-50);
    }
  }
  button {
    width: 100%;
    max-width: 21.4375rem;
    height: 3rem;

    border-radius: 0.5rem;
    background-color: var(--gray-20);
    color: var(--gray-50);
    :hover {
      animation: pulse 1s;
      animation-iteration-count: infinite;
    }
  }
`;

import styled from "styled-components";

export const ContentHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 8.6875rem;
  > img {
    animation: backInDown 1.5s;
  }
  border-radius: 0.3125rem;
  background-color: var(--gray-0);
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;

    height: 5rem;
  }
  @media (min-width: 1024px) {
    justify-content: space-between;
    padding: 0 17.5rem;
  }
`;
export const ContentInputButton = styled.div`
  display: flex;
  align-items: center;

  border: 0.125rem solid var(--gray-20);
  border-radius: 0.5rem;
  background-color: white;

  max-width: 23.8125rem;
  height: 3.75rem;
  padding: 0.3125rem;

  animation: backInDown 1.5s;

  input {
    border: none;
    outline: unset;
    background-color: white;
  }
  input::placeholder {
    color: var(--gray-20);
    font-weight: 400;
    font-size: 1rem;
  }
  img {
    height: 2.5rem;
  }
`;

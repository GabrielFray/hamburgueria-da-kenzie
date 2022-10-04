import styled from "styled-components";

export const ContentList = styled.li`
  display: flex;
  flex-direction: column;

  width: 18.75rem;
  height: 22.5625rem;

  border: 0.125rem solid var(--gray-20);
  border-radius: 0.3125rem;

  margin-top: 0.9375rem;

  animation: fadeIn 1.5s;
  :hover img {
    animation: bounce 1s;
    animation-iteration-count: infinite;
  }
  :hover {
    cursor: pointer;

    border: 2px solid var(--gray-50);
  }
  figure {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--gray-0);
  }
  img {
    width: 50%;
    height: 100%;
  }
`;
export const ContentDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 100%;
  padding: 1.25rem;

  h3 {
    font-weight: 700;
    font-size: 1.125rem;
  }
  p {
    font-weight: 400;
    font-size: 0.75rem;

    color: var(--gray-20);
  }
  span {
    font-weight: 600;
    font-size: 0.875rem;

    color: var(--color-primary);
  }
`;

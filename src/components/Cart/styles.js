import styled from "styled-components";

export const ContentCart = styled.aside`
  max-width: 24rem;
  height: 13.9375rem;

  margin: 0 auto;
  margin-top: 1.25rem;
  padding: 0.9375rem;
  h2 {
    display: flex;
    align-items: center;

    border-radius: 0.3125rem 0.3125rem 0rem 0rem;
    background: var(--color-primary);

    color: #fff;
    font-weight: 700;
    font-size: 1.125rem;

    height: 4.0625rem;
    padding: 1.3125rem;
  }

  @media (min-width: 64rem) {
    width: 30%;

    margin: 0;
  }
`;
export const ContentCartDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--gray-0);

  height: 9.875rem;
  p {
    font-weight: 700;
    font-size: 1.125rem;

    animation: fadeIn 1s;
  }
  span {
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: var(--gray-50);

    animation: fadeIn 1s;
  }
`;
export const ContentUl = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 0.625rem;

  max-height: 22.5rem;
  padding: 0.9375rem 0.3125rem;

  background-color: var(--gray-0);
  ::-webkit-scrollbar {
    width: 0.4rem;
  }
  ::-webkit-scrollbar-track {
    background: rgba(95, 94, 91, 0.155);
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(26, 26, 28, 0.329);
    border-radius: 1.25rem;
  }
  li {
    display: flex;
    align-items: flex-start;

    width: 100%;
    height: 5rem;
    padding: 0.3125rem;

    animation: fadeInLeft 1s;
    :hover {
      box-shadow: 3px 3px 5px -1px rgba(0, 0, 0, 0.3);

      border-radius: 0.3125rem;

      cursor: pointer;
    }
    :hover img {
      animation: bounce 1.5s;
    }
  }
  figure {
    width: 4.375rem;
    height: 4.375rem;

    border-radius: 0.5rem;
    background-color: var(--gray-20);
  }
  img {
    width: 100%;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    width: 60%;
    padding-left: 0.3125rem;
    p {
      font-weight: 700;
      font-size: 0.875rem;
    }
    span {
      font-weight: 400;
      font-size: 0.75rem;
      color: var(--gray-50);
    }
  }
  button {
    border: none;
    background-color: transparent;

    font-weight: 500;
    font-size: 0.75rem;
    color: var(--gray-50);

    :hover {
      animation: pulse 1s;
      animation-iteration-count: infinite;
    }
  }
`;

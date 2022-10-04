import styled from "styled-components";

export const ContentMain = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  overflow-x: auto;
  gap: 0.9375rem;

  height: 23.5rem;
  padding: 0rem 0.625rem  1.5rem;

  ::-webkit-scrollbar {
    width: 0.75rem;
    height: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background: rgba(95, 94, 91, 0.155);
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(26, 26, 28, 0.329);
    border-radius: 1.25rem;
  }
  @media (min-width: 64rem) {
    flex-direction: row;

    height: 100%;
    width: 70%;
    max-width: 62.5rem;
  }
`;
export const ContentNoProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 50vh;
  width: 100%;
  margin-top: 3.125rem;
  h2 {
    font-weight: 700;
    font-size: 1.625rem;
  }
`;
export const ContentImage = styled.div`
  width: 13.5rem;
  margin: 0 auto;
  display: ${({ none }) => {
    return none === "none" ? "none" : "block";
  }};
`;

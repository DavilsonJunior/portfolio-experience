import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 6rem;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  > img {
    width: 48rem;
    flex: 1;
    border: 1rem solid ${({ theme }) => theme.primary};
    border-radius: 24rem;
  }

  > div {
    flex: 4;
  }

  @media (max-width: 1450px) {
    gap: 4rem;
    > img {
      width: 30rem;
    }

    > div {
      flex: 1;
    }
  }

  @media (max-width: 1000px) {
    gap: 2rem;
    > img {
      width: 22rem;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    > div {
      width: 100%;
      // text-align: center;
    }
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%;

  h1 {
    font-size: 8rem;
    color: ${({ theme }) => theme.primary};
  }

  h2 {
    font-size: 3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary};

    > span {
      font-weight: bold;
    }
  }

  @media (max-width: 1450px) {
    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 2rem;
    }
  }
`;

export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CodeItem = styled.pre`
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  border-radius: 1rem;
  color: #fff;
  width: 24rem;
  align-self: flex-start;
  transition: 1s;

  &:hover {
    filter: brightness(1.2);
  }

  &:last-child {
    align-self: flex-end;
  }

  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }

  span.purple {
    color: #c38cdd;
  }

  span.blue {
    color: #7ac7e3;
  }

  span.comment {
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
    //display: block;
  }

  @media (max-width: 1450px) {
    width: 18rem;
    padding: 1.5rem;
    font-size: 0.8rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 350px) {
    span.blue {
      display: block;
    }
  }
`;

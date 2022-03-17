import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  > section > button {
    background: ${({ theme }) => theme.primary};
    padding: 0.8rem 3rem;
    border-radius: 0.5rem;
    border: none;
    transition: 0.5s;
    align-self: center;

    &:hover {
      background: ${({ theme }) => darken(0.05, theme.primary)};
    }

    a {
      text-transform: uppercase;
      color: #fff;
      font-size: 1.5rem;
      font-weight: 300;
    }

    @media (max-width: 500px) {
      padding: 1rem;
      a {
        font-size: 1rem;
      }
    }
  }

  > section {
    margin-top: 8rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;

    @media (max-width: 1450px) {
      gap: 4rem;
    }

    /*@media (max-width: 1000px) {
      gap: 5rem;
    }*/

    @media (max-width: 700px) {
      gap: 3rem;
      flex-wrap: wrap;
      margin-top: 5rem;
    }
  }
`;

export const KnowledgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;

  p {
    color: ${({ theme }) => theme.primary};
    font-weight: 300;
    font-size: 1.3rem;
    text-transform: uppercase;
  }

  svg {
    width: 6.5rem;
    height: 6.5rem;
    color: ${({ theme }) => theme.secondary};
    transition: 0.3s;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.primary};
      transform: scale(0.95);
    }
  }

  @media (max-width: 1000px) {
    p {
      font-size: 1rem;
    }

    svg {
      width: 5rem;
      height: 5rem;
    }
  }
`;

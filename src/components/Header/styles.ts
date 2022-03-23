import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  //display: block;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
    /*display: flex;
    flex-direction: column;
    margin-top: 4rem;
    background-color: ${({ theme }) => theme.backgroundLight};
    width: 100%;
    justify-content: center;
    align-items: center;
    line-height: 2rem;*/
  }
`;

/* export const Menu = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  flex-direction: column;

  padding: 0.2rem;

  position: absolute;
  top: 0.7rem;
  right: 0.3rem;

  &:hover {
    cursor: pointer;
  }

  > span.item {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.secondary};
  }

  > span.item + span {
    margin-top: 0.5rem;
  }
`; */

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    color: ${props =>
      props.isActive ? props.theme.primary : props.theme.textHighlight};
    transition: 0.5s;

    &:hover {
      color: ${props =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(0.2, props.theme.textHighlight)};
    }
  }
`;

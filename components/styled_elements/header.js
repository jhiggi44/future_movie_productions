import styled from 'styled-components'
import devices from '../../utils/devices'

const H2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.6rem;
  font-weight: bold;

  @media ${devices.md} {
    font-size: 2rem;
  }

  @media ${devices.lg} {
    font-size: 2.4rem;
  }
`;

const Header = ({ children }) => <H2>{ children }</H2>

export default Header;
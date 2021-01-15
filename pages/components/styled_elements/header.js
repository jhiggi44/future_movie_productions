import styled from 'styled-components'

const size = {
  xs: '320px',
  sm: '425px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
}

const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
};

const H2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.6rem;
  font-weight: bold;

  @media ${device.md} {
    font-size: 2rem;
  }

  @media ${device.lg} {
    font-size: 2.4rem;
  }
`;

const Header = ({ children }) => <H2>{ children }</H2>

export default Header;
import styled from 'styled-components'
import devices from '../devices'

const Field = styled.p`
  margin: 8px 0;

  @media ${devices.md} {
    font-size: 1.25rem;
  }
`;

const Header = styled.span`
  font-weight: bold;
`;

const InfoField = ({ header, info }) => (
  <Field>
    <Header>
      { `${header}: `} 
    </Header>
    { info }
  </Field>
)

export default InfoField;
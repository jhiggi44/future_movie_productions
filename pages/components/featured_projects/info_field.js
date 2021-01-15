import styled from 'styled-components'

const Header = styled.span`
  font-weight: bold;
`;

const InfoField = ({header, info}) => (
  <p>
    <Header>
      { `${header}: `} 
    </Header>
    { info }
  </p>
)

export default InfoField;
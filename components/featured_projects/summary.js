import styled from 'styled-components'
import devices from '../../utils/devices'

const Text = styled.p`
  font-style: italic;
  font-size: 1.2rem;

  @media ${devices.md} {
    font-size: 1.4rem;
  }
`;

const Summary = ({children}) => <Text>{ children }</Text>

export default Summary;
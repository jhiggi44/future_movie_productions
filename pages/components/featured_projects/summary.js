import styled from 'styled-components'

const Text = styled.p`
  font-size: 1.1rem;
  font-style: italic;
`;

const Summary = ({children}) => <Text>{ children }</Text>

export default Summary;
import styled from 'styled-components'

const Section = styled.section`
  max-width: 991px;
  margin: 24px auto;
  font-family: 'Open Sans', sans-serif;
`;

const SectionContainer = ({ children }) => (
  <Section>
    { children }
  </Section>
)

export default SectionContainer;
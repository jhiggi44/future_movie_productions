import styled from 'styled-components'

const Section = styled.section`
  max-width: 991px;
  padding: 18px;
  margin: 0 auto;
`;

const SectionContainer = ({ children }) => (
  <Section>
    { children }
  </Section>
)

export default SectionContainer;
import styled from 'styled-components'

const Section = styled.section`
  max-width: 991px;
  margin: 24px auto;
`;

const SectionContainer = ({ children }) => (
  <Section>
    { children }
  </Section>
)

export default SectionContainer;
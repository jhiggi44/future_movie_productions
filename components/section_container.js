import styled from 'styled-components'

const ContentContainer = styled.div`
  max-width: 991px;
  padding: 32px 18px;
  margin: 0 auto;
`;

const Section = styled.section`
  width: 100%;
  background-color: ${props => props.backgroundColor || "white" };
  background-image: ${props => props.backgroundImage || "none" };
  color: ${props => props.textColor || "black" };
`;

const SectionContainer = ({ backgroundColor, textColor, backgroundImage, children }) => (
  <Section backgroundImage={ backgroundImage } backgroundColor={ backgroundColor || "white" } textColor={textColor} >
    <ContentContainer>
      { children }
    </ContentContainer>
  </Section>
)

export default SectionContainer;
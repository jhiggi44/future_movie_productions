import styled from 'styled-components' 
import Image from 'next/image'

const CardContainer = styled.div`
  margin: auto;
`;

const CardContent = styled.div`
  min-width: 200px;
  max-width: 264px;
  margin: 8px;
  border-radius: 4px;
  box-shadow: 0 2px 8px #888888;
`;

const InnerSection = styled.div`
  padding: 12px;
  height: 164px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 88px;
`;

const Button = styled.button`
  background-color: ${props => props.background};
  color: ${props => props.color};
  border: none;
  padding: 8px;
  font-size: 1.2rem;
  margin: auto 0;
  border-radius: 2px;
`;

export default function Card({ project }) {
  return (
    <CardContainer>
      <CardContent>
        <Image
          src={project.poster_relative_path}
          alt={`${project.title} Poster`}
          width="312"
          height="468"
        />
        <InnerSection>
          <div>{ project.title }</div>
          <ButtonSection>
            <Button background="green" color="white">Watch Trailer</Button>
            <Button background="purple" color="white">Learn More</Button>
          </ButtonSection>
        </InnerSection>
      </CardContent>
    </CardContainer>
  )
}
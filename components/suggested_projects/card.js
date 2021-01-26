import styled from 'styled-components' 
import Image from 'next/image'

const CardContainer = styled.div`
  margin: auto;
`;

const CardContent = styled.div`
  min-width: 200px;
  max-width: 222px;
  margin: 8px;
  overflow: hidden;
`;

const Button = styled.button`
  background-color: ${props => props.background};
  color: ${props => props.color};
  border: none;
  padding: 8px;
  font-size: 1rem;
  margin: 8px 0;
  border-radius: 2px;
  width: 100%;
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
        <Button background="#EBDB0C" color="black">Learn More</Button>
      </CardContent>
    </CardContainer>
  )
}
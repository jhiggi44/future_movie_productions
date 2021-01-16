import styled from 'styled-components'
import devices from '../../../utils/devices'

const Frame = styled.iframe`
  width: 100%;
  height: 292px;
  margin: 16px 0;

  @media ${devices.sm} {
    height: 348px;
  }

  @media ${devices.md} {
    height: 424px;
  }

  @media ${devices.lg} {
    height: 518px;
  }
`;

const TransitionContainer = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(${props => props.rotation}deg);
`;

const TransitionSVG = styled.svg`
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 42px;
  transform: rotateY(${props => props.rotation}deg);
`;

const TransitionTop = ({ backgroundColor }) => {
  return (
    <TransitionContainer rotation="180">
        <TransitionSVG rotation="180" dataName="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill={ backgroundColor }></path>
        </TransitionSVG>
    </TransitionContainer>
  )
}

const TransitionBottom = ({ backgroundColor }) => {
  return (
    <TransitionContainer rotation="0" >
        <TransitionSVG rotation="0" dataName="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill={ backgroundColor }></path>
        </TransitionSVG>
    </TransitionContainer>
  )
}

function TiltedSectionContainer({ backgroundColor, children }) {
  return (
    <div>
      <TransitionTop backgroundColor={ backgroundColor } />
      <div style={{ backgroundColor: backgroundColor, color: "white" }} >
        { children }
      </div>
      <TransitionBottom backgroundColor={ backgroundColor } />
    </div>
  )
}

export default TiltedSectionContainer;
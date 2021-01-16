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
  transform: rotate(180deg);
`;

const TransitionSVG = styled.svg`
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 82px;
  transform: rotateY(180deg);
`;

const TransitionTop = () => {
  return (
    <TransitionContainer>
        <TransitionSVG dataName="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="#002E9E"></path>
        </TransitionSVG>
    </TransitionContainer>
  )
}

const TransitionBottom = () => {
  return (
    <div className="custom-shape-divider-top-1610755106">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
        </svg>
    </div>
  )
}

function TiltedSectionContainer({ children }) {
  return (
    <div>
      <TransitionTop />
      <div style={{ backgroundColor: "#002E9E", color: "white" }} >
        { children }
      </div>
      <TransitionBottom />
    </div>
  )
}

export default TiltedSectionContainer;
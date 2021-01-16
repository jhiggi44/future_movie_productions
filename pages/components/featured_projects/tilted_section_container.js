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
  
`;

const TransitionTop = () => {
  return (
    <div className="custom-shape-divider-bottom-1610754677">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
        </svg>
    </div>
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
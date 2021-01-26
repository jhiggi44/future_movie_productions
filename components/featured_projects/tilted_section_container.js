import styled from 'styled-components'

const TransitionContainer = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  background-color: ${props => props.backgroundColor || "white"};
  background-image: ${props => props.backgroundImage || "none"};
  transform: rotate(${props => props.rotation}deg);
`;

const TransitionSVG = styled.svg`
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: ${props => props.height};
  transform: rotateY(${props => props.rotation}deg);
`;

const TransitionTop = ({ 
  show = true, 
  flip = false, 
  backgroundColor, 
  fromBackgroundColor, 
  backgroundImage,
  height
}) => {
  if (!show) return null;
  return (
    <TransitionContainer rotation="0" backgroundColor={backgroundColor} backgroundImage={backgroundImage}>
        <TransitionSVG 
          height={ height }
          rotation={ flip ? "0" : "180" } 
          dataName="Layer 1"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill={fromBackgroundColor || "white"}></path>
        </TransitionSVG>
    </TransitionContainer>
  )
}

const TransitionBottom = ({ 
  show = true, 
  backgroundColor, 
  toBackGroundColor, 
  backgroundImage, 
  height 
}) => {
  if (!show) return null;
  return (
    <TransitionContainer rotation="180" backgroundColor={ backgroundColor } backgroundImage={backgroundImage}>
        <TransitionSVG 
          height={ height }
          rotation="180" 
          dataName="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill={ toBackGroundColor || "white"}></path>
        </TransitionSVG>
    </TransitionContainer>
  )
}


function TiltedSectionContainer({ 
  backgroundColor, 
  toBackGroundColor, 
  fromBackgroundColor, 
  backgroundImage, 
  hasTopTransition,
  hasBottomTransition,
  transitionHeight = "42px",
  flip = false,
  children 
}) {
  return (
    <div>
      <TransitionTop 
        show={ hasTopTransition } 
        flip={ flip }
        backgroundColor={ backgroundColor } 
        fromBackgroundColor={ fromBackgroundColor } 
        backgroundImage={ backgroundImage } 
        height={ transitionHeight } 
      />
      <div style={{ backgroundColor: backgroundColor, color: "black" }} >
        { children }
      </div>
      <TransitionBottom 
        show={ hasBottomTransition } 
        flip={ flip }
        backgroundColor={ backgroundColor } 
        toBackGroundColor={ toBackGroundColor } 
        backgroundImage={ backgroundImage } 
        height={ transitionHeight } 
      />
    </div>
  )
}

export default TiltedSectionContainer;
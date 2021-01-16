function TiltedSectionContainer({ children }) {
  return (
    <div>

<div class="custom-shape-divider-bottom-1610754677">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
</div>

      <div style={{ backgroundColor: "#002E9E", color: "white" }} >
        { children }
      </div>

      <div class="custom-shape-divider-top-1610755106">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
</div>

    </div>
  )
}

export default TiltedSectionContainer;
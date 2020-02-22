import React from "react"
import WatchNowCTA from "./watch_now_cta"

function ProjectCard({
  title,
  description,
  actionText,
  href,
  src,
  textColor,
  buttonColor,
}) {
  return (
    <div className="my-8 shadow-md max-w-card rounded-sm mx-8 sm:mx-0">
      <img src={src} alt="image" className="rounded-sm" />
      <div className="flex flex-col items-center">
        <div className="p-4">
          <div className="text-5xl mb-2">{title}</div>
          <div className="text-3xl">{description}</div>
        </div>
        <WatchNowCTA
          href={href}
          text={actionText}
          textColor={textColor}
          borderColor={buttonColor}
          backgroundColor={buttonColor}
        />
      </div>
    </div>
  )
}

export default ProjectCard

import React from "react"
import WatchNowCTA from "./watch_now_cta"
import CardDetail from "./card_detail";

function ProjectCard({
  title,
  description,
  director,
  company,
  nateRole,
  gayLynnRole,
  actionText,
  href,
  src,
  textColor,
  buttonColor,
}) {
  return (
    <div className="my-6 shadow-lg max-w-card rounded-sm bg-white mx-8 sm:mx-2 sm:shadow:md">
      <div className="flex flex-row items-center md:flex-col">
        <img src={src} alt="image" className="rounded-sm max-w-poster ml-4 md:ml-0 md:max-w-full" />
        <div classNam="flex flex-col items-center" style={{ width: "100%" }}>
          <div className="p-4 md:p-0">
            <div className="p-4">
              <div className="text-3xl mb-2">{title}</div>
              <CardDetail label="Director" value={director} />
              <CardDetail label="Production Company" value={company} />
              <CardDetail label="Nathan Smith" value={nateRole || "N/A"} />
              <CardDetail label="Gay Lynn Smith" value={gayLynnRole || "N/A"} />
            </div>
            <WatchNowCTA
              href={href} 
              text={actionText}
              textColor="white"
              borderColor="#319795"
              backgroundColor="#319795"
              hoverColor="#285E61"
              borderHoverColor="285E61"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

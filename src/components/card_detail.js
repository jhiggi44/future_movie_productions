import React from "react"

function CardDetail({ label, value }) {
    return (<div className="text-xl font-bold italic">
        {label}: <span className="not-italic font-light ml-auto">{value}</span>
        </div>
        )
}

export default CardDetail
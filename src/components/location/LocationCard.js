import React from "react"

export const LocationCard = ({location}) => {
    let accessibility = "No"
    if (location.handicapAccessible === true){
    accessibility = "Yes"}
    return (
    <section className="location">
        <h3>Location: {location.id}</h3>
        <address>{location.address}</address>
        <div>Handicap Accessible: {accessibility}</div>
    </section>
)}
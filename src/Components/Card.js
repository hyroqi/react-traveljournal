import React from "react"


export default function Card(props) {
    return (
        <div className="card">
            <div className="image--container">
                <div className="card--image"><img src={props.imageUrl} /> </div>
            </div>
            {console.log(props.imageUrl)}
            <div className="card--info">
                <div className="line1">
                    <div className="subline1">
                        <img src="/images/location-pin.png" width="20px" />
                        <p>{props.location}</p>
                    </div>
                    <a href={props.googleMapsUrl}>View on Google maps</a>
                </div>
                <div className="line2">
                    <h1>{props.title}</h1>
                </div>
                <div className="line3">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}
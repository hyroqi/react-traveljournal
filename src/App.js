import React from "react"
import ReactDOM from "react-dom"
import Nav from "./Components/Nav"
import Card from "./Components/Card"
import data from "./data"
import './style.css'

export default function App(){

    const cards = data.map(cardData =>{
        return(
            <Card 
                {...cardData}
            />
        )
    })

    return (
        <div>
            <Nav />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}
import React from "react"
import { useLocation } from "react-router-dom"

export function Home() {
    return (
        <div>
        <h1>Home</h1>
        </div>
    )
}


export function About() {
    return (
        <div>
            <h1>About Us</h1>
        </div>
    )
}

export function Article() {
    return (
        <div>
            <h1>Article</h1>
        </div>
    )
}

export function Whoops404() {
    let location = useLocation()
    return (
        <div>
            <h1>Resource not found at {location.pathname}</h1>
        </div>
    )
}
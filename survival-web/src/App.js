import React from "react"
import { Link, Switch, Route } from "react-router-dom"

import {
  Home,
  About,
  Article,
} from "./page"

function App() {
  return (
    <div>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/article">Article</Link>
          </li>
       </ul>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article" element={<Article />} />
      </Switch>
    </div>
  )
}

export default App;

import React from 'react'

export default function Nav(props) {
    return (
        <nav className="navbar">
        <ul>
          <li className="brand">
            <a href="/">Clicky Game</a>
          </li>
          <NavMessage score={props.score} topScore={props.topScore} />
          <li>
            Score: {props.score} | Top Score: {props.topScore}
          </li>
        </ul>
      </nav>
    )
}

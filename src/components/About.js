import React from 'react'

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="information">
          <h3>Information</h3>
          
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, earum fugit. Voluptas quod temporibus, recusandae perspiciatis accusantium veniam illum adipisci est similique, esse ipsum possimus atque maxime asperiores, necessitatibus quis! Porro harum id rem officia perferendis dicta et voluptates. Repellendus labore obcaecati magnam voluptatum tempore reprehenderit earum dolores, animi aperiam?
          </p>
        </div>
        <div className="rules">
          <h3>How to Play</h3>
          <h3>The Game</h3>
          <p>The Game of life is not your typical computer game. It is a 'Cellular Automaton', and was invented by Cambridge mathematician John Conway.  This game is widely none when it was mentioned in an article published by Scientific American in 1970. It consists of a collection of cells which, based on a few mathematical rules, can live, die, or multiply. Depending on the initial conditions, the cells from various patterns throughout the course of the game.</p>
          <ol className="ol">
            <li>You can have 3 cells adjacent to each other</li>
            <li>The life span is a single generation</li>
            <li>Overcrowding will kill a generation</li>
            <li>2-3 cells will remain alive for another generation</li>
          </ol>

        </div>
      </div>
      )
  }
}

export default About

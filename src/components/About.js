import React from 'react'

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="information">
          <h3>Information</h3>
          
          <p>
          The Game of life is not your typical computer game. It is a 'Cellular Automaton', and was invented by Cambridge mathematician John Conway.  This game is widely none when it was mentioned in an article published by Scientific American in 1970. It consists of a collection of cells which, based on a few mathematical rules, can live, die, or multiply. Depending on the initial conditions, the cells from various patterns throughout the course of the game.
          </p>
        </div>
        <div className="rules">
          <h3>How to Play</h3>
          <h3>The Game</h3>
          <p>This  is a  cellular automaton infinite 2 dimensional cell grid game, basically what will happen is you will have cells that will dance on the gird, each lifecycle is dependant on one another throughout the life of a generation. You have some icons at the top of the page, if click on the shuffle icon it will give you a random cell game then click the play button, I also have 2 buttons top right, a glider and a flower, the glider is just that (Glider) and the flower represents (Pulsar), you can slow the game down or speed up, we can also change the grid size.  </p>
          <ul className="ol">
            <li>Any live cell with fewer than two live neighbors dies by under population.</li>
            <li>Any live cell with two or three live neighbors lives on to the next generation.</li>
            <li>Any live cell with more than three live neighbors dies, as if by overpopulation.</li>
            <li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>
          </ul>

        </div>
      </div>
      )
  }
}

export default About

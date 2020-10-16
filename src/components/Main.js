import React from "react";
import Grid from "./Grid";
import Buttons from "./Buttons";
import Presets from "./Presets";

class Main extends React.Component {
  constructor() {
    super();
    this.speed = 100;
    this.rows = 35;
    this.cols = 50;

    this.state = {
      generation: 0,
      gridFull: Array(this.rows)
        .fill()
        .map(() => Array(this.cols).fill(0))
    };
  }

  selectBox = (row, col) => {
    let gridCopy = arrayClone(this.state.gridFull);
    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({
      gridFull: gridCopy
    });
  };

  // RANDOM/SEED
  seed = () => {
    let gridCopy = Array(this.rows)
      .fill()
      .map(() => Array(this.cols).fill(0));

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          gridCopy[i][j] = 1;
        }
      }
    }

    this.setState({
      gridFull: gridCopy,
      generation: 0
    });
    this.pauseButton();
  };

  playButton = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.play, this.speed);
  };

  pauseButton = () => {
    clearInterval(this.intervalId);
  };

  slow = () => {
    this.speed = 1000;
    this.playButton();
  };

  fast = () => {
    this.speed = 100;
    this.playButton();
  };

  clear = () => {
    let grid = Array(this.rows)
      .fill()
      .map(() => Array(this.cols).fill(0));

    this.setState({
      gridFull: grid,
      generation: 0
    });

    this.pauseButton();
  };

  gridSize = size => {
    switch (size) {
      case "1":
        this.cols = 75;
        this.rows = 75;
        break;
      default:
        this.cols = 50;
        this.rows = 50;
    }
    this.clear();
  };

  play = () => {
    let g = this.state.gridFull;
    let g2 = arrayClone(this.state.gridFull);

    for (let i = 0; i < this.rows; i++) {
      // CELL COUNT, CHECKS CELLS  WITH NEIGHBORS, AND WILL UPDATE COUNTS, ALSO IS CELL ALIVE OR DEAD
      for (let j = 0; j < this.cols; j++) {
        let count = 0; 
        if (i > 0) if (g[i - 1][j]) count++;
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
        if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
        if (j < this.cols - 1) if (g[i][j + 1]) count++;
        if (j > 0) if (g[i][j - 1]) count++;
        if (i < this.rows - 1) if (g[i + 1][j]) count++;
        if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
        if (i < this.rows - 1 && this.cols - 1) if (g[i + 1][j + 1]) count++;

        if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = 0; 
        if (!g[i][j] && count === 3) g2[i][j] = 1; 
      }
    }

    this.setState({
      gridFull: g2,
      generation: this.state.generation + 1
    });
  };

  // PRESETS
  glider = () => {
    let gridCopy = Array(this.rows)
      .fill()
      .map(() => Array(this.cols).fill(0));

    gridCopy[1][3] = 1;
    gridCopy[2][1] = 1;
    gridCopy[2][3] = 1;
    gridCopy[3][2] = 1;
    gridCopy[3][3] = 1;

    this.setState({
      gridFull: gridCopy,
      generation: 0
    });
    this.pauseButton();
  };
  
///////////////////////////////////////

  render() {
    return (
      <div>
        <h1>The Game of Life</h1>
        <div className="controls">
          <Buttons
            playButton={this.playButton}
            pauseButton={this.pauseButton}
            slow={this.slow}
            fast={this.fast}
            clear={this.clear}
            seed={this.seed}
            gridSize={this.gridSize}
          />
          <Presets
            glider={this.glider}
            pentaDecathlon={this.pentaDecathlon}
            pulsar={this.pulsar}
            gosperGun={this.gosperGun}
          />
        </div>
        <Grid
          gridFull={this.state.gridFull}
          rows={this.rows}
          cols={this.cols}
          selectBox={this.selectBox}
        />
        <h2>Generations: {this.state.generation}</h2>
      </div>
    );
  }
}

function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr));
}

export default Main;
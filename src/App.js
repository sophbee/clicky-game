import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import cakes from "./cakes.json";
import "./App.css";

class App extends Component {
  state = {
    cakes,
    currentScore: 0,
    bestScore: 0,
    clickedIds: []
  };

  changeClicked = id => {

    const cakes = this.state.cakes;

    const alreadyClicked = this.state.clickedIds.indexOf(id);

    console.log('ac', alreadyClicked);
    console.log('clickedids', this.state.clickedIds);

    this.state.clickedIds.push(id);

    if (alreadyClicked >= 0) {
      this.setState({
        cakes: cakes.sort(function(x, y) {
          return 0.5 - Math.random();
        }),
        score: 0
      });
      alert("Oops! Game resetting...");
    } else {
      this.setState({
        cakes: cakes.sort(function(x, y) {
          return 0.5 - Math.random();
        }),
        score: this.state.score + 1
      })
    }
  }

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game! Click on an image to earn points, but don't click on any more than once!</Title>

        <h2 className="Scores">
          Current Score: {this.state.currentScore} || Best Score: {this.state.bestScore}
        </h2>

        <br />

        {this.state.cakes.map(cake => (
          <PictureCard
            setClicked={this.changeClicked}
            key={cake.id}
            id={cake.id}
            image={cake.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
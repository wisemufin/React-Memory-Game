import React from 'react';
import NavBar from './components/NavBar';
import Image from "./components/ImageCards/ImageCards";
import images from "./images.json"

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class MemoryGame extends React.Component {


  state = {
    correct: 0,
    topScore: 0,
    images: shuffleArray(images)
  };

  shuffledImages = id => {
    for (let i = 0; i < this.state.images.length; i++) {
      if(this.state.images[i].id === id) {
        console.log("current elem:", this.state.images[i]);
        // You Lost Check
        if(this.state.images[i].clicked) {
          console.log("you lost");
          if(this.state.correct > this.state.topScore) {
            this.setState({ topScore: this.state.correct })
          }
          for (let j = 0; j < this.state.images.length; j++) {
            this.state.images[i].clicked = false;
          }
          return this.setState({correct: 0, images: shuffleArray(images)});
        } else {
          const updatedImages = this.state.images;
          updatedImages[i].clicked = true;
          return this.setState({correct: this.state.correct + 1, images: shuffleArray(updatedImages)})
        }
      }
    };


    if (this.props.clicked === false) {
      console.log("This hasn't been clicked");
    }
  }

  render() {
    return (
      <div>
        <NavBar correct={this.state.correct} topScore={this.state.topScore}/>
        <div style = {styles.body}>
        {this.state.images.map(image => (
          <Image
          shuffledImages={this.shuffledImages}
          key={image.id}
          id={image.id}
          image={image.image}
          name={this.state.images.name}
          clicked={this.clicked}
          />
        ))}
        </div>
      </div>
    );
  }
}

export default MemoryGame;

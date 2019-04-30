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

class MemoryGame extends React.Component {

  state = {
    correct: 0,
    topScore: 0,
    images
  };

  removeImage = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const images = this.state.images.filter(image => image.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ images });
  };

  render() {
    return (
      <div>
        <NavBar correct={this.state.correct} topScore={this.state.topScore}/>
        <div style = {styles.body}>
        {this.state.images.map(image => (
          <Image
          key={image.id}
          id={image.id}
          image={image.image}
          name={this.state.images.name}
          />
        ))}
        </div>
      </div>
    );
  }
}

export default MemoryGame;

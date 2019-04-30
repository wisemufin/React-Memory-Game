import React from 'react';

const styles = {
  navBarStyle: {
    backgroundColor: "#73DAFF",
    color: "white",
    height: 100,
    display: "flex",
    alignItems: "center",
    margin: 0,
    padding: 30,
    justifyContent: "space-between",
    listStyle: "none"
  }
};

function NavBar(props) {
  return (
    <ul style={styles.navBarStyle}>
      <li>
        <h1>Memory Game</h1>
      </li>
      <li>
        <h1>{props.status}</h1>
      </li>
      <li>
        <h1>Score: {props.correct} | Top Score: {props.topScore}</h1>
      </li>
    </ul>
  );
};

export default NavBar;

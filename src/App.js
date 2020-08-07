import React from "react";

class App extends React.Component {
  componentDidMount() {
    fetch("https://api.football-data.org/v2/competitions/2014/standings", {
      method: "GET",
      headers: {
        "X-Auth-Token": process.env.REACT_APP_API_KEY
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log("Error: ", error));
  }
  render() {
    return <div className="App">App</div>;
  }
}

export default App;

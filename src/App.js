import React, { Component } from "react";
import { CardList } from "./Component/card-list/card-list.component.jsx";
import { SearchBox } from "./Component/Searchbox/search-box.component.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }

  handleChange = (e) => this.setState({ searchField: e.target.value });

  render() {
    const mons = this.state.monsters;
    const search = this.state.searchField;
    const newMonsters = mons.filter((mon) =>
      mon.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log(newMonsters);

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          place="enter monster names"
          handleChange={this.handleChange}
        />
        <CardList mon={newMonsters} />
      </div>
    );
  }
}

export default App;

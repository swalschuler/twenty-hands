import React, { Component } from "react";

import SearchBar from "../SearchBar";
import ClipList from "./ClipList";

export default class ClipCreate extends Component {
  render() {
    return (
      <div>
        ClipCreate
        <SearchBar />
        <ClipList />
      </div>
    );
  }
}

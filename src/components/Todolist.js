import React, { Component } from "react";
import Item from "./TodoItem";

export default class Todolist extends Component {
  render() {
    return (
      <section>
        <h1>Hello from Todolist</h1>
        <Item />
      </section>
    );
  }
}

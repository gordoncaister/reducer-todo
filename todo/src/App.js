import React, { useReducer } from 'react';
import './App.css';
import {List} from "./Components/List"
import {initialState, reducer} from "./Reducers/Reducer"
function App() {
  const [todoList, dispatchTodoList] = useReducer(reducer,initialState)
  return (
    <div className="App">
      <List todoList={todoList} dispatchTodoList={dispatchTodoList}/>
    </div>
  );
}

export default App;

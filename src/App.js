import React, {useState} from 'react';
// import TikTakToe from "./components/TikTakToe";
import TodoList from "./components/todo/TodoList";
//import NewRowAndCols from "./components/NewRowAndCols";

const initialStates = [
  {id: 1, name: 'learn React'},
  {id: 2, name: 'create Server'},
  {id: 3, name: 'create Client'},

  {id: 4, name: 'connect with REST api'},
  {id: 5, name: 'learn Node'},

  {id: 6, name: 'setup Server'},
  {id: 7, name: 'refactor Client'},
  {id: 8, name: 'learn REST'},
]

function App() {
  const [list, setList] = useState(initialStates);

  function up(index) {
    const arrFirst = list.slice(0, index - 1);
    const arrLast = list.slice(index + 1, list.length);
    const arrMiddle = list.slice(index - 1, index + 1).reverse();
    const newArr = [...arrFirst, ...arrMiddle, ...arrLast];
    setList(newArr);
  }

  function down(index) {
    const arrFirst = list.slice(0, index);
    const arrLast = list.slice(index + 2, list.length);
    const arrMiddle = list.slice(index, index + 2).reverse();
    const newArr = [...arrFirst, ...arrMiddle, ...arrLast];
    setList(newArr);
  }

  return (
    <div>
      {list.map((el, index) => (
        <div key={el.id}>
          {index !== 0 && <button onClick={() => up(index)}>up</button>}
          {index !== list.length - 1 && <button onClick={() => down(index)}>down</button>}
          <button>{el.name}</button>
        </div>
      ))}

      <br/>
      <hr/>
      List of Todos
      <hr/>
      <br/>

      {/*<RowAndCol/>*/}
      {/*<NewRowAndCols/>*/}
      {/*<TikTakToe/>*/}
      <TodoList/>
      <br/>
      <hr/>
    </div>
  );
}

export default App;

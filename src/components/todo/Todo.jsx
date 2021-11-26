import '../../App.css';

function Todo(props) {
  const {id, name, done} = props.todo;
  const isDone = done ? 'todoDone' : undefined;


  return (
    <div>
        <div className={isDone} >{props.idx + 1}   {name}
          <input type='checkbox' onChange={() => props.isDoneTodo(id)}/>
          <button onClick={() => props.deleteTodo(id)}>X</button>
        </div>
    </div>
  )
}

export default Todo;
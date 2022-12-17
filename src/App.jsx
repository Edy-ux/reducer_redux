
import { useEffect, useRef } from 'react';
import { todoReducers, loadJSON, saveJSON } from './functions';
import { useReducer } from './hooks/Reducer';
import './App.css'
const Reducer = () => {

  const inputRef = useRef()
  const [state, dispacth] = useReducer(todoReducers, loadJSON('todos') || new Array());
   console.log(loadJSON('todos'))
  //
  useEffect(() => {
    saveJSON('todos', state);
  }, [state]);

  function deleteTodo({ id }) {
    dispacth({ type: 'deleteTodo', payload: { id } });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { value } = inputRef.current
    if (!value) return;
    dispacth({ type: 'add', payload: { text: value } });
    inputRef.current.value = ''
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <header>
        <h1>Labs</h1>
      </header>
      <form onSubmit={handleSubmit} name="form">
        <input type="text" name="text" ref={inputRef} placeholder="Adicione uma tarefa" />
        <button className="formButton">+</button>
      </form>

      <ul>
        {state?.map((todo) => (
          <div key={todo.id} className="containerList">
            <li>{todo.text}</li>
            <Trash onClick={() => deleteTodo(todo)} />
          </div>
        ))}
      </ul>
    </div>
  );
};
export default Reducer;

function Trash({ onClick }) {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#00b37e"
      height="15px"
      className="w-6 h-6"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      ></path>
    </svg>
  );
}

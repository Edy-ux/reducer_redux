

function todoReducers(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.payload.text, completed: false, }];

    case 'deleteTodo':
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
    // ... other actions ..
  }
}

const loadJSON = key =>
  key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data))

export { loadJSON, saveJSON, todoReducers }
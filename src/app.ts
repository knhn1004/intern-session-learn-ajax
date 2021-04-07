const todosWrapper = document.getElementById('todos');
const theButton = document.getElementById('btn');
let loading = false;

let todos: Todo[] = [];

interface Todo {
  completed: boolean;
  id: number;
  title: number;
  userId: number;
}

const fecthTodos = async () => {
  try {
    loading = true;
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data: Todo[] = await res.json();
    todos = data.slice(0, 10);
    // console.log(todos);
    renderTodos(todos);
  } catch (error) {
    console.error(error);
  } finally {
    loading = false;
  }
};

theButton?.addEventListener('click', () => {
  fecthTodos();
});

const renderTodo = ({ completed, id, title, userId }: Todo): void => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <p>${title}</p>
    `;
  todosWrapper?.appendChild(listItem);
};

const renderTodos = (todos: Todo[]): void => {
  todos.forEach(todo => {
    renderTodo(todo);
  });
};

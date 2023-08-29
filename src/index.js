import './styles.css';
import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';

export const todoLista = new TodoList();

todoLista.todos.forEach( crearTodoHtml );


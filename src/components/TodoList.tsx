import React from 'react';
import { Todo } from '../model';
import './styles.css';


interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


// Originally in the video he uses React.FC
const TodoList = ({todos, setTodos}: Props) => {
    return(
        <div className="todos">            
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.todo}</li>
                ))}
        </div>
    )
}
export default TodoList;
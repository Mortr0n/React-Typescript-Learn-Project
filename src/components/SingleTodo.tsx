import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../model';
// for react icons pay attention to the first two letters for the import  could import /bs or whatever
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from 'react-icons/ai'
import './styles.css'
import TodoList from './TodoList';


type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTodo = ({todo, todos, setTodos}: Props) => {
    const [ edit, setEdit ] = useState<boolean>(false);
    const [ editTodo, setEditTodo ] = useState<string>(todo.todo);

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id===id?{...todo, isDone: !todo.isDone}: todo))
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    // Take in the event and the id from the form onSubmit
    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        // map through the todos
        setTodos(todos.map((todo) => (
            // if id matches todo.id
            todo.id === id ?
            // set the todo text to be the editTodo text
            {...todo, todo: editTodo }: 
            // else return the todo
            todo
        )));
        setEdit(false);
    };

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])

    

    return(
        <form className='todosSingle' onSubmit={(e) => handleEdit(e, todo.id)}>
            {
                edit ? 
                (
                    <input 
                        ref={inputRef}
                        value={editTodo} 
                        onChange={(e) => setEditTodo(e.target.value)}  
                        className='todosSingle--text' 
                    />
                ):
                (
                todo.isDone ? (
                    <s className='todosSingle--text'>
                        { todo.todo}
                    </s>
                ):
                (
                    <span className='todosSingle--text'>
                        { todo.todo}
                    </span>
                )
                )
            }
            
                <div>
                    <span className='icon' onClick={() =>
                        (!edit && !todo.isDone) &&
                        setEdit(!edit)
                    }>
                        <AiFillEdit />
                    </span>
                    <span className='icon' onClick={() => handleDelete(todo.id)}>
                        <AiFillDelete />
                    </span>
                    <span className='icon' onClick={() => handleDone(todo.id)}>
                        <AiOutlineCheck />
                    </span>
                </div>
            
        </form>
    )
};

export default SingleTodo;
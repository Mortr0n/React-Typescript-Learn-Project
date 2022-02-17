import React, { useRef } from 'react';
import './styles.css'

interface Props {
    todo: string;
    // for setTodo type hover over setTodo in app.tsx and copy the line
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    // define a function as the type to pass down as props
    handleAdd: (e: React.FormEvent) => void;    
}

const InputField = ({ todo, setTodo, handleAdd }: Props ) => {
    const inputRef = useRef<HTMLInputElement>(null)

    return(
        <form className='input' onSubmit={(e) => {
            handleAdd(e)
            inputRef.current?.blur();
        }}>
            {/* for useRef you can hover over input then pull the HTMLInputElement from within the text see below*/}
            {/* (property) JSX.IntrinsicElements.input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement> */}
            <input 
                ref={inputRef}
                type="input" 
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Enter a task" 
                className='inputBox' 
            />
            <button className='inputSubmit' type='submit'>
                Go
            </button>
        </form>
    )
}

export default InputField;
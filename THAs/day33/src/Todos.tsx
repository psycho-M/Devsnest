import React, { useState, useContext } from 'react';
import { TodoList } from './TodoList';
import { TodoListProps } from './TodoList';
import ThemeContext from './ThemeContext';
import { ThemeContextType } from './ThemeContext';


export const Todos = () => {
    const [todos, setTodos] = useState<TodoListProps[]>([]);
    const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);
    const [input, setInput ] = useState<string>('');
    return (
        <div>
            <section className={theme ? 'todos dark' : 'todos'}>
                <section className="input">
                    <input type="text" value={input} onChange={(e) => {
                        setInput(e.target.value);
                    }}/>
                    <button onClick={() => {
                        setTodos([...todos, {
                            title: input,
                            done: false
                        }]);
                        setInput('');
                    }}>Add</button>

                    <button onClick={() => {
                        setTodos([]);
                        setInput('');
                    }}>Clear</button>
                </section>

                {todos.map((todo, index) => {
                    return (
                        <TodoList title={todo.title} done={todo.done} />
                    );
                })}
            </section>
        </div>
    )
}

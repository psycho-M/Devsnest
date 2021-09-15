import React, {useContext} from 'react';
import ThemeContext, { ThemeContextType } from './ThemeContext';

export interface TodoListProps {
    title: string,
    done: boolean,
};

export const TodoList = ({title, done}: TodoListProps) => {
    const {theme,setTheme} = useContext<ThemeContextType>(ThemeContext);
    return (
        <div className={theme ? 'todo-list dark' : 'todo-list'}>
            <h3>{title}</h3>
        </div>
    )
}

import React from 'react';
import AddTodo from './AddTodo';
import ListTodo from './ListTodo';

function Todo() {
    return (
        <section className="todo-container" style={{
            textAlign: 'center',
        }}>
            <h3>Todo-List</h3>
            <AddTodo />
            <ListTodo />
        </section>
    );
}

export default Todo;
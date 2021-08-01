import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, clearTodo, loadTodo } from '../actions'


function AddTodo() {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    return (
        <section>
            <input
                type="text"
                value={todo}
                onChange={e => {
                    setTodo(e.target.value)
                }}
                placeholder="Add Todo"
                style={{
                    padding: "10px",
                    margin: '10px',
                }}
            />
            <button
                onClick={() => {
                    dispatch(addTodo({
                        title: todo,
                        done: false,
                    }));
                    setTodo('');
                    console.log(todo);
                }}
                style={{
                    padding: "10px",
                }}
            >Add</button>

            <button
                onClick={() => {
                    dispatch(clearTodo());
                }}
                style={{
                    padding: "10px",
                    margin: '10px',
                }}
            >Clear</button>
            <section>
                <button
                    onClick={() => {
                        dispatch(loadTodo());
                    }}
                >Load Todo</button>

            </section>
        </section>
    );
};

export default AddTodo;
















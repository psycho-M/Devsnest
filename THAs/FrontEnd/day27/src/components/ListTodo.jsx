import { useSelector, useDispatch } from 'react-redux';

function ListTodo() {
    // console.log("In ListTodo" ,useSelector(state => state.todos));
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    return (
        <section style={{
            overflowY: 'auto',

        }}>
            {todos.map((todo, index) => (
                <section key={index}>
                    <h5 style={{
                        display: 'inline-block',
                        padding: '10px',
                        margin: '10px'
                    }}>{todo.title}</h5>
                    <button onClick={(e) => {
                        dispatch({
                            type: "DEL_TODO",
                            payload: index,
                        });
                    }}>Delete</button>
                </section>
            ))}
        </section>
    );
}

export default ListTodo;
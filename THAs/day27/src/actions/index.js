const addTodo = (newTodo) => {
    return {
        type: 'ADD_TODO',
        payload: newTodo,
    };
};
const deleteTodo = (delTodoId) => {
    return {
        type: 'DEL_TODO',
        payload: delTodoId,
    };
};
const clearTodo = () => {
    return {
        type: 'CLR_TODO',
    };
};
const loadTodo = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => response.json())
        .then((todos) => {
            // console.log(todos);
            return dispatch({
                type: 'LOAD_TODO',
                payload: todos,
            });
        });
    };
};

export {addTodo, deleteTodo, clearTodo, loadTodo};
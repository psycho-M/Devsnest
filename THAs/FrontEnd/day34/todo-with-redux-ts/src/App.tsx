import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { reducerType } from './reducers/index'
import { addNote, deleteNote } from './actions';

function App() {
  const dispatch = useDispatch();
  const notes = useSelector((state: reducerType) => state.notes);
  // const input = useSelector((state: reducerType) => state.input);
  const [input, setInput] = useState<string>('')
  return (
    <div className="App">
      <section>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button onClick={() => {
          dispatch(addNote(input));
          setInput('');
        }}>Add</button>
      </section>

      <section className='notes'>
        {notes.length === 0 ? (
          <h2>Click on Add to add notes</h2>
        ) : (
          <ul>
            {notes.map((note: string, index: number) => (
              <li key={index}>
                <h3>{note}</h3>
                <button onClick={() => {
                  dispatch(deleteNote(index));
                }}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </section>

    </div>
  );
}

export default App;

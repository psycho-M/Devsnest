import React, { useState } from 'react';
import './App.css';
import ThemeContext from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import { Todos } from './Todos';
// interface AppProps {
//   title: string;
//   description: string;
// }

// interface TodoType {
//   title: string;
//   done: boolean;
// }

const App = () => {
  // const [counter, setCounter] = useState<number | null>(null);
  // useEffect(() => {
  //   setCounter(0);
  // }, []);



  const [theme, setTheme] = useState<boolean>(false);
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme ? 'App dark' : 'App'}>
        {/* <h2>{counter}, up me to {counter + 1}</h2>
      <button onClick={() => {
        setCounter(counter + 1);
      }}>
        +1
      </button> */}

        {/* {counter !== null ? (
        <button onClick={() => {
          setCounter(counter + 1);
        }}>
          {counter}
        </button>
      ) : null} */}

      
        <Todos />
        <ThemeToggle />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

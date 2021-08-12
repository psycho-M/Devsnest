import React from 'react';
import './App.css';

interface User {
  name: string,
  age: number,
  email: string
};

function App() {
  let user: User | null = {
    name: 'Jane Doe',
    age: 30,
    email: 'doe@lol.com'
  };
  // user = null;
  return (
    <div className="App">
      {
        user === null ? "loading" : (
          <section>
            <h4>{user.name}</h4>
            <h4>{user.age}</h4>
            <h4>{user.email}</h4>
            {/* <h4>{user}</h4> */}
          </section>

        )
      }
    </div>
  );
}

export default App;

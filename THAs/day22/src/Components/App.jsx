
import { useState, useEffect } from 'react';
import '../css/App.css';
import Template from './Templates';
import Meme from './Meme';

function App() {
    const [templates, setTemplates] = useState([]);
    const [meme, setMeme] = useState(null);

    const [form, setForm] = useState({
        templateID: '',
        userName: 'teasty',
        password: ''
    });

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then((data) => {
            // console.log(data.data.memes);
            setTemplates(data.data.memes);
        })
    }, []);

  return(
      <div className="App">
        <h1>Meme Generator!</h1>
        {meme === null ? (
            <Template templates={templates} setMeme={setMeme} />
        ) : (
            <Meme meme={meme} setMeme={setMeme}/>
        )}
        
      </div>
  );
}

export default App;

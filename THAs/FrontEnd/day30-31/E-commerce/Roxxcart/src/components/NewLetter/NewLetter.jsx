import { useState } from 'react';
import './css/newsletter.css'

export default function NewsLetter() {
    const [input, setInput] = useState('');
    return (
        <section className="news-letter">
            <section className="description">
                Subscribe to our newletter and recieve exclusive offers every week
            </section>

            <section className="input">
                <input 
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                    type="email" 
                    placeholder='Enter your email'  
                    value={input}
                />
                <button >Submit</button>
            </section>
        </section>
    );
}
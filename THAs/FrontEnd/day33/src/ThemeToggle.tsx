import { useContext } from 'react';
import ThemeContext from './ThemeContext';
import { ThemeContextType } from './ThemeContext';

const ThemeToggle = () => {
    const { theme, setTheme }  = useContext<ThemeContextType>(ThemeContext);

    return (
        <h1>
            <button className={theme ? "theme-toggle" : 'theme-toggle dark'} onClick={() => {
                setTheme(!theme);
            }}>
                {theme ? 'Light' : 'Dark'}
            </button>
        </h1>
    );
};

export default ThemeToggle;
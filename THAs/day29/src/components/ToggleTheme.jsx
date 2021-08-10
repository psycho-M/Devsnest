import {useSelector, useDispatch} from 'react-redux';
import { toggleTheme } from '../actions';

export default function ToggleTheme() {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();
    return <section className="toggle-theme">
        <button 
            className={theme ? "btn btn-light" : "btn btn-dark"}
            onClick={() => dispatch(toggleTheme())}    
        >
            {theme ? 'Light' : 'Dark'} 
        </button>
    </section>
}
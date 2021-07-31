import React from 'react';
import "../css/input.css";
import { updateUsername, updateEmail } from '../actions/index';
import { useDispatch } from 'react-redux';

function Input() {
    const dispatch = useDispatch();

    return (
        <section className="input-container" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <h3 className="title">Input</h3>
            <form style={{
                display: 'flex',
                flexDirection: 'column',
                width: '70%',
                justifyContent: 'center',
                alignItems: 'stretch',
            }}>
                <input className='input' type="text" placeholder='Enter Username' required onChange={(e) => {
                    dispatch(updateUsername(e.target.value));
                }} />
                <input className='input' type="email" placeholder='Enter email ID' required onChange={(e) => {
                    dispatch(updateEmail(e.target.value));
                }} />

            </form>


        </section>
    );
}

export default Input;
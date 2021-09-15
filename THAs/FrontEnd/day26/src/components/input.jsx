import React from 'react';
import "../css/input.css";
import { updateUsername, updateEmail } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';

function Input() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    return (
        <section className="input-container" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <h3 className="title">Input</h3>
            <section style={{
                display: 'flex',
                flexDirection: 'column',
                width: '70%',
                justifyContent: 'center',
                alignItems: 'stretch',
            }}>
                <input className='input' type="text" placeholder='Enter Username' onChange={(e) => {
                    dispatch(updateUsername(e.target.value));
                }} />
                <input className='input' type="email" placeholder='Enter email ID' onChange={(e) => {
                    dispatch(updateEmail(e.target.value));
                }} />

            </section>


            <section>
                <h3 className="title">Output</h3>
                <h5>Username: {user.userName}</h5>
                <h5>Email: {user.email}</h5>
            </section>
        </section>
    );
}

export default Input;
import React from 'react'
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import './css/Footer.css';

export default function Footer() {
    return (
        <section className='footer'>
            <LeftSide />
            <RightSide />
        </section>
    );
};



import React from 'react';
import ReactDom from 'react-dom';
import './style.css';
import ReactCard from './react_card';

function MainPage(props) {
    return (
        <div className="container">
            <ReactCard />
        </div>
    )
}

ReactDom.render(
    <MainPage />,
    document.getElementById("root")
);
import React from 'react';
import ReactDom from 'react-dom';
import './style.css';
import ReactCard from './react_card';
import ChessBoard from './chess_board';

function MainPage(props) {
    return (
        <div className="container">
            <ReactCard />
            <ChessBoard />
        </div>
    )
}

ReactDom.render(
    <MainPage />,
    document.getElementById("root")
);
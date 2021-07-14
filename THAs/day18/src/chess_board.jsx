function Square() {
    return(
        <div className="chess-square"></div>
    );
}

function Row() {
    const squares = [];

    //choosing keys to be loop number as we will not be changing the square number of rows of the board
    for(let i = 0; i < 8; i++) {
        squares.push(<Square key={i} />);
    }

    return(
        <div className="chess-row">{squares}</div>
    );
    
}

function ChessBoard() {
    const rows = [];
     //choosing keys to be loop number as we will not be changing the square number of rows of the board
    for(let i = 0; i < 8; i++) {
        rows.push(<Row key={i} />);
    }


    return(
        <div className="chess-board">
            {rows}
            <Box1 />
        </div>
    );
}

export default ChessBoard;
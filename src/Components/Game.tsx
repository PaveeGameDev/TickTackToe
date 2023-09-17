import {GridManager} from "./GridManager";
import {useState} from "react";

type Props = {
    height: number,
    width: number,
    players: number,
    cellsToWin: number
}

export const Game = ({players,height,cellsToWin,width}:Props) => {

    const [winner, setWinner] = useState('');

    const [resetGrid, setResetGrid] = useState(false); // Add resetGrid state
    const onWin = (winner: string) => setWinner(winner);

    const onReset = () => {
        setWinner('');
        setResetGrid(true);
    }

    const resetGridComplete = () => {
        setResetGrid(false);
    }

    return (
        <div className='mt-5'>
            {winner && <p className='text-success display-5 h-auto'>{winner} has won</p>}
            {height > 0 && <GridManager players={players}
                          x={width}
                          y={height}
                          winLength={cellsToWin}
                          onWin={onWin}
                          winner={winner.length > 0}
                          resetGrid={resetGrid}
                          resetGridComplete={resetGridComplete}/>}
            {winner && <button className='mt-3' onClick={onReset}>Play again?</button>}
        </div>
    )
}
import {GridManager, playerNames} from "./GridManager";
import React, {useEffect, useState} from "react";

type Props = {
    height: number,
    width: number,
    players: number,
    cellsToWin: number,
    resetGrid: boolean,
    setResetGrid: React.Dispatch<React.SetStateAction<boolean>>
}

export const Game = ({players,height,cellsToWin,width, resetGrid, setResetGrid}:Props) => {

    const [winner, setWinner] = useState('');

    const onReset = () => {
        setResetGrid(true);
    }

    useEffect(()=>{
        setWinner('');
    },[resetGrid])

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
                          setWinner={setWinner}
                          winner={winner.length > 0}
                          resetGrid={resetGrid}
                          resetGridComplete={resetGridComplete}/>}
            {winner && <button className='mt-3' onClick={onReset}>Play again?</button>}
        </div>
    )
}
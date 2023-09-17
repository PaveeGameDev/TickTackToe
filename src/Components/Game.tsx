import {GridManager} from "./GridManager";
import React, {useEffect, useState} from "react";

type Props = {
    height: number,
    width: number,
    players: number,
    cellsToWin: number,
    resetGrid: boolean,
    setResetGrid: React.Dispatch<React.SetStateAction<boolean>>
    quickGame: boolean,
    setQuickGame: React.Dispatch<React.SetStateAction<boolean>>
}

export const Game = ({players,height,cellsToWin,width, resetGrid, setResetGrid, quickGame, setQuickGame}:Props) => {

    const [winner, setWinner] = useState('');
    const [playerCount, setPlayerCount] = useState(players);
    const [winLengthCount, setWinLengthCount] = useState(cellsToWin);
    const [widthCount, setWidthCount] = useState(width)
    const [heightCount, setHeightCount] = useState(height)

    const onReset = () => {
        setResetGrid(true);
    }

    useEffect(()=>{
        setWinner('');
    },[resetGrid])

    const resetGridComplete = () => {
        setResetGrid(false);
    }

    useEffect(() => {
        if(quickGame){
            setPlayerCount(2);
            setWinLengthCount(3);
            setHeightCount(3)
            setWidthCount(3)

        }
        setQuickGame(false);
    }, [quickGame])

    return (
        <div className='mt-5'>
            {winner && <p className='text-success display-5 h-auto'>{winner} has won</p>}
            {height > 0 && <GridManager players={playerCount}
                          x={widthCount}
                          y={heightCount}
                          winLength={winLengthCount}
                          setWinner={setWinner}
                          winner={winner.length > 0}
                          resetGrid={resetGrid}
                          resetGridComplete={resetGridComplete}/>}
            {winner && <button className='mt-3' onClick={onReset}>Play again?</button>}
        </div>
    )
}
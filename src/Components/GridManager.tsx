import {Block} from "./Block";
import React, {useEffect, useState} from "react";

type Props = {
    x: number,
    y: number,
    players: number,
    winLength: number,
    winner: boolean,
    setWinner: React.Dispatch<React.SetStateAction<string>>,
    resetGrid: boolean,
    resetGridComplete: () => void,
}

export const playerNames = [
    '',
    'X',
    'O',
    'Z',
    'Y',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G'
]

export const GridManager = ({x, y, players, winLength, setWinner, winner, resetGrid, resetGridComplete}: Props) => {



    const [currentPlayer, setCurrentPlayer] = useState(0);

    const [grid, setGrid] = useState<number[][]>([[]])

    useEffect(() => {
        const row: number[] = Array(x).fill(0);
        const column: number[][] = Array(y).fill(row);
        setGrid(column);
        setCurrentPlayer(1);
        resetGridComplete();
    }, [resetGrid, x, y, players, winLength])



    const onClick = (id: number[]) => {
        if(grid[id[0]][id[1]] !== 0) return;
        setGrid(grid.map((row, index) => row.map((cell, indexCell) => indexCell === id[1] && index === id[0] ? currentPlayer : cell)))
        if (countWin(id, winLength)) setWinner(playerNames[currentPlayer]);
        setCurrentPlayer(currentPlayer % players + 1);
    }

    const countWin = (id: number[], winLength: number): boolean => countX(id, winLength) || countY(id, winLength) || countZ(id, winLength) || countW(id, winLength);

    const countX = (id: number[], winLength: number): boolean => {
        let count = 0;
        for (let i = winLength; i > -winLength; i--) {
            if (checkCell([id[0], id[1] - i + 1], currentPlayer) || i === 1) {
                count++;
                if (count >= winLength) return true;
            } else {
                count = 0;
            }
        }
        return false;
    }

    const countY = (id: number[], winLength: number): boolean => {
        let count = 0;
        for (let i = winLength; i > -winLength; i--) {
            if (checkCell([id[0] - i + 1, id[1]], currentPlayer) || i === 1) {
                count++;
                if (count >= winLength) return true;
            } else {
                count = 0;
            }
        }
        return false;
    }

    const countZ = (id: number[], winLength: number): boolean => {
        let count = 0;
        for (let i = winLength; i > -winLength; i--) {
            if (checkCell([id[0] - i + 1, id[1] - i + 1], currentPlayer) || i === 1) {
                count++;
                if (count >= winLength) return true;
            } else {
                count = 0;
            }
        }
        return false;
    }

    const countW = (id: number[], winLength: number): boolean => {
        let count = 0;
        for (let i = winLength; i > -winLength; i--) {
            if (checkCell([id[0] - i + 1, id[1] + i - 1], currentPlayer) || i === 1) {
                count++;
                if (count >= winLength) return true;
            } else {
                count = 0;
            }
        }
        return false;
    }

    const checkCell = (id: number[], currentPlayer: number): boolean => {
        if (grid[id[0]]) {
            return grid[id[0]][id[1]] === currentPlayer;
        }
        return false;
    }

    if (players >= playerNames.length) return <p>Too much players</p>;

    return (
        <div className='overflow-hidden border-black border-1 border rounded-5'>
            <table>
                <tbody >
                {grid.map((row, index) => <tr key={index} className='d-flex'>{row.map((cell, indexCell) => <Block
                    key={indexCell} user={playerNames[row[indexCell]]}
                    id={[index, indexCell]} disabled={winner} onclick={onClick}/>)}</tr>)}
                </tbody>
            </table>
        </div>
    )
}
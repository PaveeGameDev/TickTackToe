import './App.css'
import {Game} from "./Components/Game";
import {GameForm, GameFormData} from "./Components/GameForm";
import {useState} from "react";

function App() {

    const [formData, setFormData] = useState<GameFormData>({height: 0, width: 0, cellsToWin: 0, players: 0})

    const [resetGrid, setResetGrid] = useState(false); // Add resetGrid state

    const [quickGame, setQuickGame] = useState(false);

    return (
        <div className='d-flex flex-column justify-content-center align-items-center' >
            <div className='w-350px'>
                <h1>Tick Tack Toe</h1>
                <GameForm onSubmit={(data) => setFormData(data)}/>
                <button onClick={()=> setResetGrid(true)} className="btn btn-secondary w-50 m-2">Reset game</button>
                <button onClick={()=> setQuickGame(true)} className="btn btn-outline-primary w-50">Quick game</button>
            </div>
            <Game height={formData.height} players={formData.players} cellsToWin={formData.cellsToWin}
                  width={formData.width} resetGrid={resetGrid} setResetGrid={setResetGrid} setQuickGame={setQuickGame} quickGame={quickGame}/>
        </div>
    )
}

export default App

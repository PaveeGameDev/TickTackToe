import './App.css'
import {Game} from "./Components/Game";
import {GameForm, GameFormData} from "./Components/GameForm";
import {useState} from "react";

function App() {

    const [formData, setFormData] = useState<GameFormData>({height: 0, width: 0, cellsToWin: 0, players: 0})

    const [resetGrid, setResetGrid] = useState(false); // Add resetGrid state

    const [quickGame, setQuickGame] = useState(false);

    const handleFormsubmit = (data:GameFormData) => {
        setFormData(data);
        setQuickGame(false)
    }

    const handleQuickGame = () => {
        setResetGrid(true);
        setQuickGame(true)
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center' >
            <div className='w-350px'>
                <h1>Tick Tack Toe</h1>
                <GameForm onSubmit={(data) => handleFormsubmit(data)}/>
                <button onClick={() => setResetGrid(true)} className="btn btn-secondary w-50 m-2">Reset game</button>
                <button onClick={handleQuickGame} className="btn btn-outline-primary w-50">Quick game</button>
            </div>
            <Game height={quickGame ? 3 : formData.height} players={quickGame ? 2 : formData.players} cellsToWin={quickGame ? 3 : formData.cellsToWin}
                  width={quickGame ? 3 : formData.width} resetGrid={resetGrid} setResetGrid={setResetGrid}/>
        </div>
    )
}

export default App

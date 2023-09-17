import './App.css'
import {Game} from "./Components/Game";
import {GameForm, GameFormData} from "./Components/GameForm";
import {useState} from "react";

function App() {

    const [formData, setFormData] = useState<GameFormData>({height: 0, width: 0, cellsToWin: 0, players: 0})

    return (
        <div className='d-flex flex-column justify-content-center align-items-center' >
            <div className='w-350px'>
                <h1>Tick Tack Toe</h1>
                <GameForm onSubmit={(data) => setFormData(data)}/>
            </div>
            <Game height={formData.height} players={formData.players} cellsToWin={formData.cellsToWin}
                  width={formData.width}/>
        </div>
    )
}

export default App

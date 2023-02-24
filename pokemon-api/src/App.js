import './App.css';
import Pokemons from './Pokemons';
import PokemonName from './Pokemon'
import { Route, Routes } from 'react-router-dom';

const Home = () => (
    <div>
        <h1>Pokémon database</h1>
        <Pokemons />
    </div>
);


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path=":name" element={<PokemonName />} />
            </Routes>

        </div>
    );
}

export default App;

import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Title from "./components/title/Title";
import HelpButton from './components/help-button/HelpButton';
import StatisticalButtons from './components/statistical-buttons/StatisticalButtons';
import PlayerTable from './components/player-table/PlayerTable';

function App() {
    // State to hold players data
    const [players, setPlayers] = useState([]);
    // State to manage which statistics are active
    const [activeStats, setActiveStats] = useState(["PTS", "REB", "AST", "STL", "BLK", "3PM", "FG%", "FT%", "TO"]);

    // Function to fetch player data based on active statistics, wrapped with useCallback
    const fetchPlayers = useCallback(async () => {
        try {
            const statsQuery = activeStats.join('&stats=');
            const apiUrl = import.meta.env.VITE_API_BASE_URL; // Make sure this environment variable is set in Netlify
            const response = await fetch(`${apiUrl}?stats=${statsQuery}`);
            const data = await response.json();
            setPlayers(data);
        } catch (error) {
            console.error('Failed to fetch players:', error);
        }
    }, [activeStats]);  // Include activeStats in the dependency array of useCallback

    // Effect to fetch players when activeStats changes
    useEffect(() => {
        fetchPlayers();
    }, [fetchPlayers]);  // Include fetchPlayers in the dependency array of useEffect

    return (
        <div>
            <header>
                <HelpButton />
            </header>
            <Title />
            <StatisticalButtons activeStats={activeStats} onToggleStat={setActiveStats} />
            <PlayerTable players={players} />
        </div>
    );
}

export default App;

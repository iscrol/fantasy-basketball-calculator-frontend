import { useState, useEffect } from 'react';
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

    // Function to fetch player data based on active statistics
    const fetchPlayers = async () => {
      try {
          const statsQuery = activeStats.join('&stats=');
          const apiUrl = import.meta.env.VITE_API_BASE_URL;
          const response = await fetch(`${apiUrl}?stats=${statsQuery}`);
          const data = await response.json();
          console.log(data);  // Log data here to inspect it
          setPlayers(data);
      } catch (error) {
          console.error('Failed to fetch players:', error);
      }
  };
  

    // Effect to fetch players when activeStats changes
    useEffect(() => {
        fetchPlayers();
    }, [activeStats]);

    // Function to handle toggling statistics
    const handleToggleStat = (stat) => {
        setActiveStats(prev => 
            prev.includes(stat) ? prev.filter(s => s !== stat) : [...prev, stat]
        );
    };

    return (
        <div>
            <header>
                <HelpButton />
            </header>
            <Title />
            <StatisticalButtons activeStats={activeStats} onToggleStat={handleToggleStat} />
            <PlayerTable players={players} />
        </div>
    );
}

export default App;

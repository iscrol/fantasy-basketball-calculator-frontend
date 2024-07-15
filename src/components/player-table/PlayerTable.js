import React from 'react';
import styles from './PlayerTable.module.css';

const PlayerTable = ({ players }) => {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Team</th>
                        <th>Position</th>
                        <th>Value</th>
                        <th>Games</th>
                        <th>Minutes</th>
                        <th>Points</th>
                        <th>Rebounds</th>
                        <th>Assists</th>
                        <th>Steals</th>
                        <th>Blocks</th>
                        <th>3PM</th>
                        <th>FG%</th>
                        <th>FT%</th>
                        <th>Turnovers</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{player.Player}</td>
                            <td>{player.Tm}</td>
                            <td>{player.Pos}</td>
                            <td>{player.value}</td>
                            <td>{player.G}</td>
                            <td>{player.MP}</td>
                            <td>{player.PTS}</td>
                            <td>{player.TRB}</td>
                            <td>{player.AST}</td>
                            <td>{player.STL}</td>
                            <td>{player.BLK}</td>
                            <td>{player['3P']}</td>
                            <td>{player['FG%']}</td>
                            <td>{player['FT%']}</td>
                            <td>{player.TOV}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PlayerTable;

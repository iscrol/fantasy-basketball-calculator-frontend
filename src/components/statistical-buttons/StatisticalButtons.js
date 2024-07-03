import React from 'react';
import styles from './StatisticalButtons.module.css';

const StatisticalButtons = ({ activeStats, onToggleStat }) => {
    const categories = ["PTS", "REB", "AST", "STL", "BLK", "3PM", "FG%", "FT%", "TO"];

    return (
        <div className={styles.container}>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onToggleStat(category)}
                    className={styles.statBtn}
                    style={{ backgroundColor: activeStats.includes(category) ? 'teal' : 'gray' }}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default StatisticalButtons;

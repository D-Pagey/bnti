import React from 'react';
import { string, number } from 'prop-types';

const PlayerStats = ({ playerName, kills, deaths, wins }) => {
    return (
        <div>
            <h3>{`${playerName}'s stats`}</h3>
            <ul>
                <li>Kills: {kills}</li>
                <li>Deaths: {deaths}</li>
                <li>Wins: {wins}</li>
            </ul>
        </div>
    );
};

PlayerStats.propTypes = {
    playerName: string.isRequired,
    kills: number.isRequired,
    deaths: number.isRequired,
    wins: number.isRequired
};

export default PlayerStats;

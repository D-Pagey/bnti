/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PlayerStats from '../PlayerStats';

const GINGERVKING = 'account.cc269d82f66d43dc9ac50dc798cc930a';
const HUNTY = 'account.edf9ce0be0f049bf9279bb768140ee78';
const RAGED = 'account.2ec1c79927694418b3c4a9d9aeede1ed';

const Players = () => {
    const [deaths, setDeaths] = useState(0);
    const [kills, setKills] = useState(0);
    const [player, setPlayer] = useState('GingerVking');
    const [wins, setWins] = useState(0);

    const getSelectedPlayer = () => {
        switch (player) {
            case 'GingerVking':
                return GINGERVKING;
            case 'Hunty':
                return HUNTY;
            case 'Raged':
                return RAGED;
            default:
                return GINGERVKING;
        }
    };

    const fetchGameModeStats = async (gameMode) => {
        const { data } = await axios.get(`${process.env.REACT_APP_API_GATEWAY}/players/stats/${getSelectedPlayer()}`);

        const { kills, losses: deaths, wins } = data.message.data.attributes.gameModeStats[gameMode];

        setDeaths(deaths);
        setKills(kills);
        setWins(wins);
    };

    useEffect(() => {
        fetchGameModeStats('squad-fpp');
    }, [player]);

    return (
        <div>
            <h2>Select the players stats you wish to see:</h2>
            <select name="players" value={player} onChange={(e) => setPlayer(e.target.value)}>
                <option value="GingerVking">GingerVking</option>
                <option value="Hunty">Hunty</option>
                <option value="Raged">R4g3d</option>
            </select>
            <PlayerStats playerName={player} kills={kills} deaths={deaths} wins={wins} />
        </div>
    );
};

export default Players;

import React from 'react'
import nba from 'nba';

import { Profile } from './Profile'
import SearchBar from "./SearchBar"
import { DataViewContainer } from './DataViewContainer'
import { DEFAULT_PLAYER_INFO } from "../constants"

export class Main extends React.Component {
    state = {
        playerInfo: DEFAULT_PLAYER_INFO,
    }
    componentDidMount() {
        this.loadPlayerInfo(this.state.playerInfo.fullName)
    }

    handleSelectPlayer = (playerName) => {
        this.loadPlayerInfo(playerName)
        console.log(playerName)
    }

    loadPlayerInfo = (playerName) => {
        nba.stats.playerInfo( { PlayerID: nba.findPlayer(playerName).playerId})
            .then((response) => {
                const playerInfo = Object.assign(response.commonPlayerInfo[0], response.playerHeadlineStats[0])
                console.log(playerInfo)
                this.setState({ playerInfo })
            })
    }

    render() {
        return (
            <div className="main">
                <SearchBar handleSelectPlayer={this.handleSelectPlayer}/>
                <div className="player">
                    <Profile playerInfo={this.state.playerInfo}/>
                    <DataViewContainer playerId={this.state.playerId} />
                </div>
            </div>
        )
    }
}
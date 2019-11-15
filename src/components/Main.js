import React from 'react'
import nba from 'nba';

import { Profile } from './Profile'
import { DataViewContainer } from './DataViewContainer'

export class Main extends React.Component {
    state = {
        playerId: nba.findPlayer('Stephen Curry').playerId,
        playerInfo: null,
    }
    componentDidMount() {
        nba.stats.playerInfo( { PlayerID: this.state.playerId })
            .then((response) => {
                const playerInfo = Object.assign(response.commonPlayerInfo[0], response.playerHeadlineStats[0])
                console.log(playerInfo)
                this.setState({ playerInfo })
            })
            .catch((e) => console.log(e))
    }

    render() {
        return (
            <div className="main">
                <Profile playerInfo={this.state.playerInfo}/>
                <DataViewContainer playerId={this.state.playerId} />
            </div>
        )
    }
}
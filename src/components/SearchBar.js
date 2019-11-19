import React, {Component} from 'react';
import nba from 'nba';
import { Icon, Input, AutoComplete } from 'antd';
import { PROFILE_PIC_URL_PREFIX } from '../constants';

const { Option } = AutoComplete

class SearchBar extends Component {
    state = {
        option_dataSource: [],
    };
    handleSearch = value => {
        console.log(value)
        this.setState({
            option_dataSource: !value?
                [] : nba.searchPlayers(value).map(player=> ({
                    fullName: player.fullName,
                    playerId: player.playerId,
                }))
        })
    }

    onSelect = (playerName) => {
        this.props.handleSelectPlayer(playerName)
    }

    render() {
        const { option_dataSource } = this.state
        console.log(option_dataSource)
        const options = option_dataSource.map((player) => (
            <Option key={player.fullName} value={player.fullName}
                className="player-option">
                <img className="player-option-image" src={`${PROFILE_PIC_URL_PREFIX}/${player.playerId}.png`}/>
                <span className="player-option-label">{player.fullName}</span>
            </Option>
        ))


        return(
                <AutoComplete
                    className="search-bar"
                    size="large"
                    // style={{ width: '100%' }}
                    dataSource={options}
                    onSelect={this.onSelect}
                    onSearch={this.handleSearch}
                    placeholder="Search NBA Player"
                    optionLabelProp="value"
                >
                    <Input
                        suffix={
                                <Icon type="search" className="certain-category-icon"/>
                        }
                    />
                </AutoComplete>
        )
    }
}

export default SearchBar;
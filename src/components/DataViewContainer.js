import React from 'react'
import { ShotChart } from './ShotChart'

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        displayTooltip: true,
        chartType: "hexbin"
    }

    onChange = () => {
        this.setState({
            minCount: 11,
            displayTooltip: false,
            chartType: "scatter"
        })
    }

    render() {
        const { minCount, displayTooltip, chartType } = this.state
        console.log('state', minCount, displayTooltip, chartType)

        return (
            <div className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={minCount}
                    displayTooltip={displayTooltip}
                    chartType={chartType}
                />
                <button onClick={this.onChange}>click</button>
            </div>

        )
    }
}
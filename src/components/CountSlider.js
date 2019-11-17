import React from 'react'
import { Slider, InputNumber, Row, Col } from 'antd';


export class CountSlider extends React.Component {
    state = {
        inputValue: this.props.value
    };

    onChange = value => {
        let cleanValue = Number(value) ? parseInt(value, 10): this.state.inputValue
        this.setState({
            inputValue: cleanValue,
        });

        // 呼叫由this.props傳來的callback function
        this.props.onChange(cleanValue)
    };

    render() {
        const { inputValue } = this.state;

        return (
            <Row>
                <Col span={12}>
                    <Slider
                        min={2}
                        max={20}
                        onChange={this.onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={2}
                        max={20}
                        style={{ marginLeft: 16 }}
                        value={inputValue}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        );
    }
}
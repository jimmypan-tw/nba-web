import React, {Component} from 'react';
import { Icon, Button, Input, AutoComplete } from 'antd';

class SearchBar extends Component {
    render() {
        return(
                <AutoComplete
                    className="search-bar"
                    size="large"
                    // style={{ width: '100%' }}
                    // dataSource={dataSource.map(renderOption)}
                    // onSelect={onSelect}
                    // onSearch={this.handleSearch}
                    placeholder="Search NBA Player"
                    optionLabelProp="value"
                >
                    <Input
                        suffix={
                            <Button
                                className="search-btn"
                                style={{ marginRight: -12 }}
                                size="large"
                                type="primary"
                            >
                                <Icon type="search" />
                            </Button>
                        }
                    />
                </AutoComplete>
        )
    }
}

export default SearchBar;
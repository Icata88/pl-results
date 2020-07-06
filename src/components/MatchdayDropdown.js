import React from 'react';
import { Select } from 'antd';
import { getMatchList } from '../utils/helperMethods';

const { Option }  = Select;

export const MatchdayDropdown = (props) => {
    const { selectedMatchday, currentMatchday, changeMatchday } = props;
    return (
        <Select value={selectedMatchday} onChange={changeMatchday}>
            {getMatchList(currentMatchday).map(m => (
                <Option key={m} value={m}>{m}</Option>
            ))}
        </Select>
    );
}
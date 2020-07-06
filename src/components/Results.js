import React from 'react';
import { MatchdayDropdown } from './MatchdayDropdown';
import { ResultsList } from './ResultsList';
import { Row, Col } from 'antd';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const loadinIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const Results = (props) => {
    const { changeMatchday, currentMatchday, selectedMatchday, spinning, matches } = props;
    return (
        <div>
            <Row justify='center'>
                <Col><span style={{ verticalAlign: 'middle', paddingRight: '6px', fontWeight: 'bold'}}>Select matchday</span></Col>
                <Col span={2}>
                    <MatchdayDropdown 
                        changeMatchday={changeMatchday}
                        currentMatchday={currentMatchday}
                        selectedMatchday={selectedMatchday} />
                </Col>
            </Row>
            <Row justify='center'>
                <Col span={24} style={{ minHeight: '200px' }}>
                    {spinning ?
                        <Spin indicator={loadinIcon} /> :
                        <ResultsList matches={matches} />
                    }
                </Col>
            </Row>
        </div>
    );
}
import React from 'react';
import { Row, Col } from 'antd';

export const ResultsList = (props) => {
    const { matches } = props;
    return (
        <div className='ResultsList'>
            {matches.map(m => (
                <Row className='ResultsList-row' key={m.id}>
                    <Col span={4}>{m.status === 'FINISHED' ? 'FT' : new Date(m.utcDate).toDateString()}</Col>
                    <Col span={8}>{m.homeTeam.name}</Col>
                    <Col span={4}>{m.status === 'FINISHED' ? `${m.score.fullTime.homeTeam}-${m.score.fullTime.awayTeam}` : '?-?'}</Col>
                    <Col span={8}>{m.awayTeam.name}</Col>
                </Row>
            ))}
        </div>
    );
}
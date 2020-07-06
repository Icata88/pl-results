import React, { Component } from 'react';
import { standingsColumns } from '../utils/standingsColumns';
import { Table } from 'antd';

export class Standings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const { standings } = this.props;
        const standingsData = [];
        standings.map((s, i) => {
            const { position, playedGames, won, draw, lost, goalsFor, goalsAgainst, goalDifference, points } = s;
            const { name } = s.team;
            const team = {
                position,
                name,
                playedGames,
                won,
                draw,
                lost,
                goalsFor,
                goalsAgainst,
                goalDifference,
                points,
                key: i
            }
            standingsData.push(team);
        });
        this.setState({ data: standingsData });
    }

    render() {
        return (
            <Table 
                pagination={false} 
                dataSource={this.state.data} 
                columns={standingsColumns}
            />
        );
    }
}
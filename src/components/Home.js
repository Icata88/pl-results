import React, { Component } from 'react';
import { Results } from './Results';
import { Standings } from './Standings';
import { CommentSection } from './CommentSection'
import { Tabs } from 'antd';
import { getPlCurrentMatchday, getPlMatchesByMatchday, getPlStandings } from '../services/apiService';
import { getTotalStandings } from '../utils/helperMethods';

const { TabPane } = Tabs;

export class Home extends Component {
    constructor(props)  {
        super(props);

        this.state = {
            currentMatchday: 0,
            selectedMatchday: 0,
            matchesForSelectedMatchday: [],
            standings: [],
            spinning: false
        }

    }

    changeMatchday = (value) => {
        this.setState({ selectedMatchday: value });
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedMatchday !== this.state.selectedMatchday) {
            this.setState({ spinning: true });
            const matches = await getPlMatchesByMatchday(this.state.selectedMatchday);
            setTimeout(() => {
                this.setState({ matchesForSelectedMatchday: matches, spinning: false });
            }, 2000);
        }
    }

    async componentDidMount() {
        this.setState({ spinning: true });
        const currentMatchday = await getPlCurrentMatchday();
        this.setState({ currentMatchday, selectedMatchday: currentMatchday });
        const matches = await getPlMatchesByMatchday(this.state.selectedMatchday);
        const standings = await getPlStandings();
        const totalStandings = getTotalStandings(standings);
        setTimeout(() => {
            this.setState({ matchesForSelectedMatchday: matches, standings: totalStandings, spinning: false });
        }, 2000);
        
    }

    render() {
        return(
            <div className='Home' style={{ maxWidth: '1024px', margin: '0 auto' }}>
                <Tabs onChange={this.handleTabChange} defaultActiveKey='1' centered>
                    <TabPane tab='Results' key='1'>
                        <Results 
                            spinning={this.state.spinning}
                            matches={this.state.matchesForSelectedMatchday}
                            changeMatchday={this.changeMatchday}
                            currentMatchday={this.state.currentMatchday}
                            selectedMatchday={this.state.selectedMatchday} />
                    </TabPane>
                    <TabPane tab='Standings' key='2'>
                        <Standings standings={this.state.standings} />
                    </TabPane>
                    <TabPane tab='Have your say!' key='3'>
                        <CommentSection />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}
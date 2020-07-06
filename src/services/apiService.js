import { get } from '../utils/apiUtils';

const plCompetitionUrl = 'http://api.football-data.org/v2/competitions/PL';
const plCompetitionMatchdayUrl = 'http://api.football-data.org/v2/competitions/PL/matches?matchday=';
const plCompetitionStandingsUrl = 'http://api.football-data.org/v2/competitions/PL/standings';

export const getPlCurrentMatchday = async () => {
    try {
        const response = await get(plCompetitionUrl);
        if (response.status === 200) {
            const { currentSeason } = response.data;
            const { currentMatchday } = currentSeason;
            return currentMatchday;
        }
    } catch(error) {
        console.log('Error while trying to get current matchday: ', error);
    }
}

export const getPlMatchesByMatchday = async (matchday) => {
    try {
        const response = await get(`${plCompetitionMatchdayUrl}${matchday}`);
        if (response.status === 200) {
            const { matches } = response.data;
            return matches;
        }
    } catch(error) {
        console.log(`Error while fetching PL match results for matchday ${matchday}: `, error);
    }
}

export const getPlStandings = async () => {
    try {
        const response = await get(plCompetitionStandingsUrl);
        if (response.status === 200) {
            const { standings } = response.data;
            return standings;
        }
    } catch(error) {
        console.log('Error while fetching PL standings');
    }
}
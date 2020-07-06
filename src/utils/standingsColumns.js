export const standingsColumns = [
    {
        title: 'Position',
        dataIndex: 'position',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Played',
        dataIndex: 'playedGames',
    },
    {
        title: 'Won',
        dataIndex: 'won',
        sorter: {
            compare: (a, b) => a.won - b.won,
        },
    },
    {
        title: 'Draw',
        dataIndex: 'draw',
        sorter: {
        compare: (a, b) => a.draw - b.draw,
        },
    },
    {
        title: 'Lost',
        dataIndex: 'lost',
        sorter: {
            compare: (a, b) => a.lost - b.lost,
        },
    },
    {
        title: 'GF',
        dataIndex: 'goalsFor',
        sorter: {
            compare: (a, b) => a.goalsFor - b.goalsFor,
        },
    },
    {
        title: 'GA',
        dataIndex: 'goalsAgainst',
        sorter: {
            compare: (a, b) => a.goalsAgainst - b.goalsAgainst,
        },
    },
    {
        title: 'GD',
        dataIndex: 'goalDifference',
        sorter: {
            compare: (a, b) => a.goalDifference - b.goalDifference,
        },
    },
    {
        title: 'Points',
        dataIndex: 'points',
        sorter: {
            compare: (a, b) => a.points - b.points,
        },
    },
  ];
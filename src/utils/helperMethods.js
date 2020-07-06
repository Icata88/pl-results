export const getMatchList = (currentMatchDay) => {
    const matchList = [];
    for (let i = 1; i <= currentMatchDay; i++) {
        matchList.push(i);
    }
    return matchList;
}

export const getTotalStandings = (standings) => {
    return standings.filter(t => t.type === 'TOTAL').map(s => s.table)[0];
}

export const getLocalStorageComments = () => {
    return JSON.parse(localStorage.getItem('comments') || '[]');
}

export const setLocalStorageComments = (comments) => {
    const commentsList = JSON.parse(localStorage.getItem('comments') || '[]');
    commentsList.push(comments);
    localStorage.setItem('comments', JSON.stringify(commentsList));
}
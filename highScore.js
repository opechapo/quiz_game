const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const list = document.createElement('li');

highScoresList.inner = highScores.map((score) => {
    return <li class = 'high-score'> ${score.name} - ${score.score}</li>;
}).join('');
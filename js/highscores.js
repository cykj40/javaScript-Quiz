var highScoreList = document.getElementById('highScoresList');
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
    //taking an array of items and turning it into something else
    .map(score => {
        // html in a string in javascript
        return `<li class="high-score">${score.name} - ${score.score}</li>`;

    })
    .join("");    

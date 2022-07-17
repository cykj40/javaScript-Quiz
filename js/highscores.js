var highScoreList = document.getElementById('highScoresList');
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

copnsole.log(highScores);
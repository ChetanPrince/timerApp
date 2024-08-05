let scoresBtn = document.querySelector(
    "#view-high-scores"
);
// Rank previous scores in order by
// Retrieving scores from localStorage

function printHighscores() {
    let highscores =
        JSON.parse(
            window.localStorage.getItem(
                "highscores"
            )
        ) || [];
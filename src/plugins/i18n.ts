import { createI18n } from 'vue-i18n';

export default createI18n({
    locale: "en",
    messages: {
        en: {
            startView: {
                gameTitle: "Guess the cards",
                playButton: "Play",
            },
            guessOverlay: {
                titleCorrect: "Correct",
                titleIncorrect: "Incorrect",
                playerCorrect: "You gain 5 seconds!",
                playerIncorrect: "You lose 10 seconds!",
            },
            leaderboardView: {
                title: "Leaderboard",
                playAgainButton: "Play Again",
                totalCorrectAnswers: "Total correct answers: ",
                attempt: "Attempt",
                answers: "answers",
            },
        },
    },
});

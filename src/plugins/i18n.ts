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
                playerCorrect: "You gain 10s",
                playerIncorrect: "You lose 10s",
            },
            leaderboardView: {
                title: "Leaderboard",
                playAgainButton: "Play Again",
                attempt: "Attempt",
                answers: "answers",
            },
        },
    },
  });
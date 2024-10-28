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
            funnyMessages: {
                0: "Fold and live to {word} again. ~ not Edward Norton",
                1: "Life, like poker, has an element of {word}. It shouldn't be avoided. It should be faced. ~ not David Hayano",
                2: "Poker is not a game in which the meek inherit the {word}. ~ not David Hayano",
                3: "You will show your {word} by the hands you fold, not the hands you play. ~ not Dan Reed",
                4: "Poker is a {msg} game pretending to be a chance game. ~ not James Altucher",
            }
        },
    },
});

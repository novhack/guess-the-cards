import { useFetch } from '@vueuse/core';
import { useI18n } from 'vue-i18n';

const RANDOMWORD_API = "https://api.api-ninjas.com/v1/randomword/?X-Api-Key=" + import.meta.env.CARDS_API_NINJAS_KEY;

export function useFunny() {
    const { t } = useI18n();

    async function getRandomWord(): Promise<string> {
        const { data, error, statusCode } = await useFetch(RANDOMWORD_API).get();

        if (statusCode.value !== 200 || error.value) {
            console.warn("Failed to connecto to randomword API. Status code: ", statusCode.value, ", error: ", error);
            return Promise.reject();
        } else {
            const randomWord: string = JSON.parse(data.value as string).word[0];
            return Promise.resolve(randomWord);
        }
    }

    function getFunnyMessage(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            getRandomWord()
                .then((randomWord: string) => {
                    resolve(generateFunnyMessage(randomWord));
                })
                .catch(() => {
                    reject("It seems that the funny is not available right now.");
                });
        });
    }

    function generateFunnyMessage(randomWord: string) {
        const index = getRandomNumber(4);
        return t(`funnyMessages.${index}`, { word: randomWord });
    }

    function getRandomNumber(range: number): number {
        return Math.floor(Math.random() * range);
      }

    return {
        getFunnyMessage,
    }
}

import { useFetch } from '@vueuse/core';
import { Ref, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const RANDOMWORD_API = "https://api.api-ninjas.com/v1/randomword/?X-Api-Key=" + import.meta.env.CARDS_API_NINJAS_KEY;

export function useFunny() {
    const { t } = useI18n();
    const funnyMessage: Ref<string> = ref("");

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

    function getFunnyMessage(): void {
        getRandomWord()
            .then((randomWord: string) => {
                funnyMessage.value = generateFunnyMessage(randomWord);
            })
            .catch(() => {
                funnyMessage.value = "It seems that the funny is not available right now.";
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
        funnyMessage,
        getFunnyMessage,
    }
}

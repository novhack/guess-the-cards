import { expect, test, beforeEach, afterEach, vi } from 'vitest';

let useCountdown: Function;

beforeEach(async () => {
    vi.useFakeTimers();
    vi.resetModules();
    const countdown = await import('../composables/useCountdown');
    useCountdown = countdown.useCountdown;
});

afterEach(() => {
    vi.useRealTimers()
});

test('Start countdown', async () => {
    const { countdown, startCountdown } = useCountdown();
    startCountdown();
    advanceTime(100);
    expect(countdown.value).toBe(0);
});

test('Pause countdown', () => {
    const { countdown, startCountdown, pauseCountdown } = useCountdown();
    startCountdown();
    pauseCountdown();
    advanceTime(50);
    expect(countdown.value).toBe(100);
});

test('Resume countdown', () => {
    const { countdown, startCountdown, pauseCountdown, resumeCountdown } = useCountdown();
    startCountdown();
    advanceTime(5);
    pauseCountdown();
    advanceTime(5);
    resumeCountdown();
    advanceTime(15);
    expect(countdown.value).toBe(80);
});

test('Reset countdown', () => {
    const { countdown, startCountdown, resetCountdown } = useCountdown();
    startCountdown();
    advanceTime(50);
    resetCountdown();
    expect(countdown.value).toBe(100);
});

test('Add seconds', () => {
    const { countdown, startCountdown, addSeconds } = useCountdown();
    startCountdown();
    advanceTime(50);
    addSeconds(25);
    expect(countdown.value).toBe(75);
});

test('Remove seconds', () => {
    const { countdown, startCountdown, removeSeconds } = useCountdown();
    startCountdown();
    advanceTime(50);
    removeSeconds(25);
    expect(countdown.value).toBe(25);
});

function advanceTime(seconds: number) {
    vi.advanceTimersByTime(seconds * 1000);
}

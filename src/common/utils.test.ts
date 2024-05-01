import { it, describe, expect } from 'vitest';
import { sleep, timer } from '@/common/utils';

describe('timer', () => {
  const timeStamp = timer();

  it('start method should set the timestamp to the current time', async () => {
    const startTime = new Date().getTime();
    timeStamp.start();
    const timeElapsed = timeStamp.stop();

    expect(timeElapsed).toBeGreaterThanOrEqual(0);
    expect(timeElapsed).toBeLessThan(startTime);
  });

  it('stop method should return elapsed time', async () => {
    timeStamp.start();
    const sleepMs = 3000;
    await new Promise<void>((resolve) => setTimeout(() => resolve(), sleepMs));
    const timeElapsed = timeStamp.stop();

    // The elapsed time should be at least as long as we slept
    expect(timeElapsed).toBeGreaterThanOrEqual(sleepMs);
  });
});

describe('sleep', () => {
  it('should delay the execution of the subsequent code for the specified time', async () => {
    const delayMs = 500;
    const startTime = Date.now();
    await sleep(delayMs);
    const endTime = Date.now();

    expect(endTime - startTime).toBeGreaterThanOrEqual(delayMs);
  });

  it('should resolve without delaying when passed a non-positive time', async () => {
    const delayMs = -500;
    const startTime = Date.now();
    await sleep(delayMs);
    const endTime = Date.now();

    expect(endTime - startTime).toBeLessThan(10); // execution should be near-instant
  });
});

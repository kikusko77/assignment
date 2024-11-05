import {describe, expect, it} from "@jest/globals";
import {formatDate, getPrices, getRandomPrice, getRandomPriceForLastHour, getTodayTimestamps} from "@/lib/utils";

describe("getRandomPrice", () => {
    it("should return a random price between 50 and 100", () => {
        const price = getRandomPrice();
        expect(price).toBeGreaterThanOrEqual(50);
        expect(price).toBeLessThanOrEqual(100);
    })
})

describe("getRandomPriceForLastHour", () => {
    it("should return array with one number", () => {
        const price = getRandomPriceForLastHour();
        expect(Array.isArray(price)).toBe(true);
        expect(price.length).toBe(1);
    })
})

describe("getTodayTimestamps", () => {
    it("should return array of timestamps", () => {
        const timestamps = getTodayTimestamps();
        expect(timestamps.length).toBe(24);
        expect(Array.isArray(timestamps)).toBe(true);
        //Each timestamp should be one hour apart
        for (let i = 1; i < timestamps.length; i++) {
            expect(timestamps[i] - timestamps[i - 1]).toBe(3600);
        }
        // Ensure the first timestamp is midnight of today
        const now = new Date();
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
        const expectedStartTimestamp = Math.floor(startOfDay.getTime() / 1000);
        expect(timestamps[0]).toBe(expectedStartTimestamp);
    })
})

describe("formatDate", () => {
    it('should format time as only hours', () => {
        const formatedDateUTC = formatDate(1730811310);
        expect(formatedDateUTC).toBe('1 PM')
    });
})

describe("getPrices", () => {
    it('should return low, high and average prices', () => {
        const prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const calculatedPrices = getPrices(prices);

        // Check if 'low' array is filled with the lowest value
        expect(calculatedPrices.low).toEqual(Array(prices.length).fill(1));
        expect(calculatedPrices.high).toEqual(Array(prices.length).fill(10));
        expect(calculatedPrices.average).toEqual(Array(prices.length).fill(5.5));
    });
})
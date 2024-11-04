import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//Since the api doesn't have a certificate we won't fetch from it because its worst security practice
// Helper function to generate random prices between 50 and 100
export const getRandomPrice = () => {
  return Math.floor(Math.random() * (100 - 50 + 1)) + 50;
};

// Helper function to generate an array with one random price between 50 and 100
export const getRandomPriceForLastHour = () => {
  const price = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
  return [price]; // Return the price as an array with one number
};

// Function to return last 24 hours timestamps
export const getTodayTimestamps = () => {
  const now = new Date();

  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
  return Array.from({length: 24}, (_, i) => Math.floor(startOfDay.getTime() / 1000) + i * 3600);
};

export function formatDate(epochTime: number, locale: string = "en-US"): string {
  const date = new Date(epochTime * 1000); // Convert seconds to milliseconds
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric', // Show only hours
    hour12: true     // Use 12-hour format with AM/PM
  };

  return new Intl.DateTimeFormat(locale, options).format(date);
}

export function getPrices(price: number[]) {
  const low = price.map(() => Math.min(...price)); // Array with same length as price, filled with the low value
  const high = price.map(() => Math.max(...price)); // Array with same length as price, filled with the high value
  const average = price.map(() => price.reduce((acc, val) => acc + val, 0) / price.length); // Array with same length, filled with average value

  return { low, high, average };
}

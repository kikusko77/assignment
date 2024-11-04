import {regions} from "@/lib/constants/regions";
import {FetchResponse} from "@/lib/interfaces/Fetch-response";

export const fetchAllRegionPrices = async () => {
    // Get today date because api sends day ahead info
    const {start, end} = getLastHourTimestamps();

    const requests = regions.map(async (region) => {
        const response = await fetch(`http://localhost:3000/api/sample-data?bzn=${region.regionCode}&start=${start}&end=${end}&type=all`);

        if (!response.ok) {
            return {
                price: "Couldn't fetch " + region.regionName + " price",
                regionCode: region.regionCode,
                regionName: region.regionName
            };
        }

        const data: FetchResponse = await response.json();
        return {price: data.price[0], regionCode: region.regionCode, regionName: region.regionName};
    });

    // Waits for all calls and create and array of objects
    return Promise.all(requests);
};


const getLastHourTimestamps = () => {
    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);

    return {
        start: Math.floor(oneHourAgo.getTime() / 1000),
        end: Math.floor(now.getTime() / 1000),
    };
};

const getTodayTimestamps = () => {
    const now = new Date();

    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
    const startTimestamp = Math.floor(startOfDay.getTime() / 1000); //Unix format

    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    const endTimestamp = Math.floor(endOfDay.getTime() / 1000);

    return {
        start: startTimestamp,
        end: endTimestamp,
    };
};

export const fetchCurrentPrice = async (regionCode: string) => {
    const {start, end} = getTodayTimestamps();

    try {
        const response = await fetch(`http://localhost:3000/api/sample-data?bzn=${regionCode}&start=${start}&end=${end}&type=current`);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Failed to fetch price: ${errorData.error || response.statusText}`);
        }

        const data: FetchResponse = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching price data:", error);
        throw error;
    }
};

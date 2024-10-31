import { regions } from "@/lib/constants/regions";
import { FetchResponse } from "@/lib/interfaeces/FetchResponse";

export const fetchAllRegionPrices = async () => {
    const { start, end } = getLastHourTimestamps();

    // fetch all regions one by one
    const requests = regions.map(async (region) => {
        const response = await fetch(`https://api.energy-charts.info/price?bzn=${region.regionCode}&start=${start}&end=${end}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch price for region ${region.regionCode}`);
        }

        const data: FetchResponse = await response.json();
        return { price: data.price[0], regionCode: region.regionCode, regionName: region.regionName };
    });

    // wait for every fetch and then make an Array from it
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

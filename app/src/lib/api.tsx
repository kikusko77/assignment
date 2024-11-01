import {regions} from "@/lib/constants/regions";
import {FetchResponse} from "@/lib/interfaces/FetchResponse";

export const fetchAllRegionPrices = async () => {
    const {start, end} = getLastHourTimestamps();

    const requests = regions.map(async (region) => {
        const response = await fetch(`/api/all-region-prices?bzn=${region.regionCode}&start=${start}&end=${end}`);

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

    return Promise.all(requests); // waits for all calls and create and array of objects
};


const getLastHourTimestamps = () => {
    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);

    return {
        start: Math.floor(oneHourAgo.getTime() / 1000),
        end: Math.floor(now.getTime() / 1000),
    };
};

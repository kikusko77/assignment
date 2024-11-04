import {getRandomPrice, getRandomPriceForLastHour, getTodayTimestamps} from "@/lib/utils";
import {NextResponse} from "next/server";
import {regions} from "@/lib/constants/regions";

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    const type = searchParams.get("type");
    const bzn = searchParams.get("bzn") ?? 'AT';

    const region = regions.find(region => region.regionCode === bzn.toUpperCase());

    if (!region) {
        return NextResponse.json({error: 'Invalid region code'}, {status: 400});
    }

    if (type === 'all') {
        // Generate random price for each region
        const response = {
            price: getRandomPriceForLastHour(),
            regionCode: region?.regionCode,
            regionName: region?.regionName
        };

        return NextResponse.json(response);
    }

    if (type === 'current') {
        // Generate static response with random prices for the last 24 hours
        const timestamps = getTodayTimestamps();
        const prices = timestamps.map(() => getRandomPrice());

        const response = {
            license_info: "CC BY 4.0 (creativecommons.org/licenses/by/4.0) from Bundesnetzagentur | SMARD.de",
            unix_seconds: timestamps,
            price: prices,
            unit: "EUR / megawatt_hour",
            deprecated: false
        };

        return NextResponse.json(response);
    }

    return NextResponse.json({error: 'Invalid endpoint'}, {status: 404});
}
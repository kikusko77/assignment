import {QueryClient} from "@tanstack/react-query";
import {fetchAllRegionPrices} from "@/lib/api";

export default async function Home() {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ["allRegionPrices"],
        queryFn: () => fetchAllRegionPrices(),
    });

    return (
        <div>
            <h1>Region Prices for the Last Hour</h1>
        </div>
    );
}

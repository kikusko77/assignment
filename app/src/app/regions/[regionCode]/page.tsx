import {regions} from "@/lib/constants/regions";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {fetchCurrentPrice} from "@/lib/api";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import CurrentPrices from "@/app/regions/[regionCode]/current-prices";
import DailyPrices from "@/app/regions/[regionCode]/daily-prices";

// @ts-ignore
export default async function RegionDetail({params: {regionCode}}) {
    const region = regions.find((region) => region.regionCode === regionCode)
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["regionPrice", regionCode],
        queryFn: () => fetchCurrentPrice(regionCode),
    });
    const dehydratedState = dehydrate(queryClient);


    return (
        <>
            <div className='flex items-center justify-center'>
                <h1 className='text-2xl sm:text-4xl font-bold mb-6'>Detail of region {region?.regionName}</h1>
            </div>
            <Tabs
                className="flex w-full flex-col items-center"
                defaultValue="current_prices"
            >
                <TabsList className="max-w-full overflow-x-auto overflow-y-hidden">
                    <TabsTrigger value="current_prices">Current Prices</TabsTrigger>
                    <TabsTrigger value="daily_prices">Daily Prices</TabsTrigger>
                </TabsList>
                <HydrationBoundary state={dehydratedState}>
                    <TabsContent className="w-full" value="current_prices">
                        <CurrentPrices regionCode={regionCode}/>
                    </TabsContent>
                    <TabsContent className="w-full" value="daily_prices">
                        <DailyPrices regionCode={regionCode}/>
                    </TabsContent>
                </HydrationBoundary>

            </Tabs>
        </>

    );
}

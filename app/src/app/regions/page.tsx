import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {fetchAllRegionPrices} from "@/lib/api";
import {DataTable} from "@/components/ui/data-table/data-table";
import {columns} from "@/components/ui/data-table/columns";

export default async function Home() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["allRegionPrices"],
        queryFn: () => fetchAllRegionPrices(),
    });

    // Dehydrate the cache
    const dehydratedState = dehydrate(queryClient);

    return (
        <div>
            <div className='flex items-center justify-center'>
                <h1 className='text-2xl sm:text-4xl font-bold mb-6'>Region Prices for the Last Hour</h1>
            </div>
            <HydrationBoundary state={dehydratedState}>
                <DataTable columns={columns} queryKey="allRegionPrices"/>
            </HydrationBoundary>
        </div>
    );
}
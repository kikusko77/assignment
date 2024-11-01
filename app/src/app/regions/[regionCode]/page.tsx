// import { dehydrate, QueryClient } from "@tanstack/react-query";
// import { fetchAllRegionPrices } from "@/lib/api";
// import { DataTable } from "@/components/ui/data-table/data-table";
// import { columns } from "@/components/ui/data-table/columns";
// import { HydrationBoundary } from "@tanstack/react-query";
//
// export default async function Home() {
//     // Create a QueryClient instance
//     const queryClient = new QueryClient();
//
//     // Fetch data on the server side
//     const data = await fetchAllRegionPrices();
//
//     // Set the data in React Query's cache
//     queryClient.setQueryData(["allRegionPrices"], data);
//
//     // Dehydrate the cache
//     const dehydratedState = dehydrate(queryClient);
//
//     return (
//         <div>
//             <h1>Region Prices for the Last Hour</h1>
//
//             {/* Hydrate React Query with server-fetched data */}
//             <DataTable columns={columns} data={data} />
//         </div>
//     );
// }

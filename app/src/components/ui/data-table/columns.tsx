"use client"

import {ColumnDef} from "@tanstack/table-core";
import {Region} from "@/lib/interfaces/Region";
import {ArrowUpDown, Loader} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

//Columns of the data table
export const columns: ColumnDef<Region>[] = [
    {
        accessorKey: "regionCode",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="hidden md:inline-flex" // hide for medium-sized screens and smaller
                >
                    Region code
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => {
            return (
                <div className="hidden md:inline-block">
                    {row.original.regionCode}
                </div>
            )
        }
    },
    {
        accessorKey: "regionName",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Region name
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            );
        },
    },
    {
        accessorKey: "price",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="hidden sm:inline-flex" // hide for medium-sized screens and smaller
                >
                    Price
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => {
            return (
                <div className="hidden sm:inline-block">
                    {row.original.price === 0 ?
                        <Loader className="animate-spin"/> : row.original.price}
                </div>
            )
        }
    },
    {
        accessorKey: "button",
        header: "",
        cell: ({row}) => {
            const router = useRouter();
            const handleDetailClick = () => {
                const regionCode = row.getValue("regionCode");
                router.push(`/${regionCode}`);
            };
            return (
                <Button className="bg-blue-600 text-white" onClick={handleDetailClick}>
                    Detail
                </Button>
            );
        }
    }
]
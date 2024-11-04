"use client";

import {useQuery} from "@tanstack/react-query";
import {fetchCurrentPrice} from "@/lib/api";
import {Line} from "react-chartjs-2";
import {cn, formatDate} from "@/lib/utils"
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import React from "react";
import {CircleX, Loader} from "lucide-react";
import {options} from "@/lib/constants/bar-options";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function CurrentPrices({regionCode}: { regionCode: string }) {
    const {data, isLoading, error} = useQuery({
        queryKey: ["regionPrice", regionCode],
        queryFn: () => fetchCurrentPrice(regionCode),
    });

    if (isLoading) return <div className='flex justify-center'><Loader className="animate-spin"/></div>;
    if (error) return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <CircleX className="text-red-500 w-16 h-16"/>
            <span className="inline-flex items-center gap-2 mt-4 font-bold pb-4">
        {error.message}
      </span>
            <Link
                href="/"
                className={cn(buttonVariants(), "text-center font-bold rounded-lg text-white", "flex items-center bg-blue-600")}
            >
                Back to main page
            </Link>
        </div>)

    const LineData = {
        // @ts-ignore
        labels: data?.unix_seconds?.map((date: number) => formatDate(date)), //X axis
        datasets: [
            {
                label: "Current Prices in €",
                // @ts-ignore
                data: data?.price || [], // Y Axis
                borderColor: "rgb(215,54,241)",
            },
        ],
    };

    return (
        <div className="w-full h-96">
            <Line data={LineData} options={options}/>
        </div>
    );
}

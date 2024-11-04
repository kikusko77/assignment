'use client'
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from "chart.js";
import {Bar} from "react-chartjs-2";
import {useQuery} from "@tanstack/react-query";
import {fetchCurrentPrice} from "@/lib/api";
import {cn, formatDate, getPrices} from "@/lib/utils";
import {options} from "@/lib/constants/bar-options";
import {CircleX, Loader} from "lucide-react";
import React from "react";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function DailyPrices({regionCode}: { regionCode: string }) {

    // Get the current time in Unix timestamp format, rounded to the nearest hour
    const now = new Date();
    const currentHourTimestamp = Math.floor(now.setMinutes(0, 0, 0) / 1000);

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


    const {low, high, average} = getPrices(data?.price || []);

    //Find the closest timestamp to current hour
    const closestTimestamp = data?.unix_seconds
        ?.find((timestamp: number) => timestamp <= currentHourTimestamp);

    const barData = {
        labels: closestTimestamp ? [formatDate(closestTimestamp)] : [],
        datasets: [
            {
                label: "Daily Low (€/MWh)",
                data: low,
                borderColor: "rgb(227,18,18)",
                backgroundColor: "rgba(227,18,18)",
            },
            {
                label: "Daily High (€/MWh)",
                data: high,
                borderColor: "rgba(215,54,241)",
                backgroundColor: "rgba(215,54,241)",
            },
            {
                label: "Daily Average (€/MWh)",
                data: average,
                borderColor: "rgb(66,11,175)",
                backgroundColor: "rgba(153,102,255,1)",
            },
        ],
    };


    return (
        <div className="w-full h-96">
            <Bar data={barData} options={options}/>
        </div>
    );
}

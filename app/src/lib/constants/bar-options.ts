import {ChartOptions} from "chart.js";

// Options for the bar and line chart
export const options: ChartOptions<"bar" | "line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            title: {
                display: true,
                text: "Time",
                font: { size: 20, weight: "bold" },
            },
            ticks: { font: { size: 14 } },
        },
        y: {
            title: {
                display: true,
                text: "Price (€/MWh)",
                font: { size: 20, weight: "bold" },
            },
            ticks: { font: { size: 14 } },
        },
    },
};
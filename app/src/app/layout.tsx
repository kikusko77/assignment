import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/app/providers";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Electricity price app",
    description: "",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`relative min-h-screen overflow-x-hidden bg-background font-sans antialiased transition-[background] flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased`}
            suppressHydrationWarning={true}
        >
        <main className="flex-grow max-w-7xl w-full mx-auto pt-10 pb-12 flex flex-col gap-9 px-6 lg:px-8">
            <Providers>
                {children}
            </Providers>
        </main>
        </body>
        </html>
    );
}

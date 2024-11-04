'use client'
import {CircleX} from "lucide-react"
import Link from "next/link"
import {cn} from "@/lib/utils"
import {buttonVariants} from "@/components/ui/button"

type ErrorProps = {
    error: string;
};

export default function Error({error}: ErrorProps) {

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <CircleX className="text-red-500 w-16 h-16"/>
            <span className="inline-flex items-center gap-2 mt-4 font-bold pb-4">
        {error}
      </span>
            <Link
                href="/"
                className={cn(buttonVariants(), "text-center font-bold rounded-lg text-white", "flex items-center bg-blue-600")}
            >
                Back to main page
            </Link>
        </div>
    )
}

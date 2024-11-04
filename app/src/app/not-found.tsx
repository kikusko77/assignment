import {CircleX} from "lucide-react"
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <CircleX className="text-red-500 w-16 h-16"/>
            <span className="inline-flex items-center gap-2 mt-4 font-bold">
        Not found this region
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

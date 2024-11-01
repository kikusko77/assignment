import {CircleX} from "lucide-react"

export default function NotFound() {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <CircleX className="text-red-500 w-16 h-16"/>
            <span className="inline-flex items-center gap-2 mt-4 font-bold">
        Not found
      </span>
        </div>
    )
}

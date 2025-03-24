import { GoPencil, GoTrash } from "react-icons/go"
import { Button } from "./button"

export const Tasks = () => {
    return(
        <div className="w-[800px] px-5 py-3 rounded-lg bg-zinc-700 flex items-start justify-between gap-3">
            <p className="text-zinc-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolorum molestiae mollitia aliquid ipsam esse, cumque sequi? Quod facere laudantium soluta exercitationem corporis qui, quas repellendus perferendis. Facilis, fugiat debitis!</p>
            <div className="flex justify-center gap-2">
            <Button icon={<GoPencil className="group-hover:text-zinc-50"/>} className="bg-zinc-50 group hover:!ring-transparent"/>
            <Button icon={<GoTrash className="group-hover:text-zinc-50" />} className="bg-zinc-50  group hover:!bg-orange-700 hover:!ring-transparent"/>
            </div>
            
        </div>
    )
}
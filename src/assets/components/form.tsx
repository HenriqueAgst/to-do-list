import { LuPlus } from "react-icons/lu"
import { Button } from "./button"

export const Form = () => {
    return(
        <form action="" className="flex items-center gap-2.5">
            <input type="text" className="bg-white px-2 py-1 w-80 rounded-lg
             focus:outline-none focus:ring-1 focus:ring-purple-400"/>
            <Button icon={<LuPlus className="text-zinc-50"/>} label="Criar Tarefa"/>
        </form>
    )
}
import { LuListTodo } from "react-icons/lu"

export const Header = () => {
    return(
        <div>
            <header className="flex justify-center items-center  w-full gap-2.5 p-5 bg-zinc-950">
            <LuListTodo className="text-3xl  text-zinc-50"/>
            <p className="text-xl text-zinc-50 ">To<span className="text-purple-500">Do</span> List</p>
        </header>

        <div className="h-0.5 bg-linear-to-r from-purple-500 to bg-purple-400"/>

        </div>
    )
}
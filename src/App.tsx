import { Content } from "./assets/components/content";
import { Form } from "./assets/components/Form";
import { Header } from "./assets/components/header";

export function App() {
  return(
    <div className="h-screen w-full bg-linear-to-b from-zinc-950 to bg-zinc-800">
    <Header />
    <div className="flex-col w-full flex items-center justify-center mt-40 gap-10">
    <Form />
    <Content />
    </div>

    


    </div>
  )
}
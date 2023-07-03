import { Title } from "../../shared/title"

function Home(){
    return(
        <div className="flex flex-col p-2 bg-white h-screen w-full">
            <header>
                <div className="text-darkblue-base text-3xl font-bold">
                    <Title
                        title="Agendamento"
                    />
                </div>
            </header>
        </div>
    )
}
export default Home
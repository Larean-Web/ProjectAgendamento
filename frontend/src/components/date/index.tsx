import { Link } from "react-router-dom"

interface AppProps  {
    day: string,
    number: number,
    month: string,
    route: string
}

function Date({day, number, month, route}: AppProps){
    return(
        <div className="flex flex-col">
            <Link to={route}>
                <h1>
                    {day}
                </h1>
                <h1 className="text-2xl">
                    {number}
                </h1>
                <h1>
                    {month}
                </h1>
            </Link>
        </div>
    )
}
export default Date
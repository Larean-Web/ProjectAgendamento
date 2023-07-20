
interface AppProps {
    title: string
}

function Title({title}: AppProps){
    return(
        <h1>
            {title}
        </h1>
    )
}
export default Title
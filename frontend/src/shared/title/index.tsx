type AppProps = {
    title: string,
}


export function Title({title}: AppProps){
    return(
        <h1>{title}</h1>
    )
}

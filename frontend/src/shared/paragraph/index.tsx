type AppProps = {
    text: string,
}
export function Paragraph({text}:AppProps){
    return(
        <p>{text}</p>
    )
}
export default function({name, txtColor}){
    let col = { color: txtColor, backgroundColor : "grey"};
    
    return(
        <>
        <h1 style={col}>{name}</h1>
        </>
    )
}
function printHello(){
    console.log("hello")
    console.log(event)
}

export default function(){
    return(
        <>
        <button onClick={printHello}>Click me</button>
        <p onDoubleClick={() => {{console.log("hello")}}}>this is parah is for event demo</p>
        <button onMouseMove={()=> {console.log("U mouse down")}}>Mouse Over</button>
        </>
    )
}
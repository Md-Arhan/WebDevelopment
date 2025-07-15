export default function({oldprice, newprice}){
    let oldstyles = {
        textDecorationLine : "line-through",
    };
    let newStyles = {
        fontWeight : "bold"
    }
    let style = {
        backgroundColor : "#e0c367",
        height : "30px",
        width : "210px",
        borderBottomLeftRadius : "18px",
        borderBottomRightRadius : "18px"
    }
    return (
        <div style={style}>
            <span style={oldstyles}>{oldprice}</span>
            &nbsp;&nbsp;
            <span style={newStyles}>{newprice}</span>

        </div>
    )
}
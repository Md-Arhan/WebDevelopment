import "./Product.css"

function Product({title, price = 1000, features=[], features2={}}){
    console.log(features);
    console.log(features2);
    // const list = features2.map((ele) => <li>{ele}</li>);
    // let isDiscount = price > 5000?"5%" : ""; 
    // if(price > 5000){
    //     return (
    //          <div className="Product">
    //         <h3>Title : {title}</h3>
    //         <h5>Price + Discount 5%: {price}</h5>
    //         {/* <h5>{features}</h5>
    //         <p>{features2.b}</p> */}
    //         {/* <p>{features.map((ele) => <li>{ele}</li>)}</p> */}
    //     </div>
    //     )
    // }else{
    let style = {backgroundColor : price >5000? "yellow" : "red"};
        return (
            <div className="Product">
                <h3 style={style}>Title : {title}</h3>
                <h5>Price : {price }</h5>
                {price > 5000?<p>Discount : 5%</p> : <a href="/">Get Discount</a>}
                {price > 5000 && <p>Discount : 5%</p>}

                
                {/* <h5>{features}</h5>
                <p>{features2.b}</p> */}
                {/* <p>{features.map((ele) => <li>{ele}</li>)}</p> */}
            </div>
        )
    // }
}

export default Product
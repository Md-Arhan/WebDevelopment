import Product from "./Product.jsx"
import Msg from "./hellomsg.jsx";

function ProductTab(){
  let features = [<li>"hi-tech"</li>, "durable", "flexible"];
  let options = {a :"hi-tech", b:"durable", c:"flexible"}
    return (
      <>
      {/* <Product title="tab" features={features} features2={["hitech", "durable"]}/>
         <Product title='Phone' price={3000} features2={options}/> */}
         <Product title="laptop" price="5000"/>
         <Product title="tab" price="9000"/>
         <Msg name={"arhan"} txtColor={"red"} />
         <Msg name={"ur"} txtColor={"blue"} />
         <Msg name={"rehman"} txtColor={"yellow"} />
       </> 
    )
}

export default ProductTab
import "./Product.css"
import Price from "./price";

function Product({ title, idx}) {
    let oldPrice = ["12,4950", "48,965", "16,962"];
    let newPrice = ["8236", "36,566", "5965"];
    let description = [["8,000 DPI", "5 Programming buttons"], ["intuitive surface", "designed for iPad"], ["wireless", "optical orientation"]];
    return (
      <div className="Product">
        <p>{title}</p>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <Price oldprice={oldPrice[idx]} newprice={newPrice[idx]} />
      </div>
    );
}

export default Product

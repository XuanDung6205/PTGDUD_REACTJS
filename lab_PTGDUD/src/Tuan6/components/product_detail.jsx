import { useParams } from "react-router-dom"
import "../Bai3/bai3.css"

function ProductDetail(props) {
    let { id } = useParams();
    // console.log(id);
    let products = props.products;
    // console.log(products);

    // lọc ra id tương ứng theo url có đuôi :id
    let product = products.find(p => p.id == id);

    return (
        <div className="detail">
            <h1>{product.id}</h1>
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>

        </div>
    )
}

export default ProductDetail
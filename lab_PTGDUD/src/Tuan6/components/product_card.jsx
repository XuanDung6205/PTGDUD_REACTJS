import { Link, useParams } from "react-router-dom"
import "../Bai3/bai3.css"

function ProductCard(props) {
    return (
        <div className="card">
            <h1>{props.name}</h1>
            <h2>{props.price}</h2>
            <Link to={`/product_detail/${props.id}`}>Xem chi tiết</Link>
        </div>
    )
}

export default ProductCard
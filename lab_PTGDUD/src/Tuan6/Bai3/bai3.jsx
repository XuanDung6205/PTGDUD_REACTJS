import ProductCard from "../components/product_card";
import ProductDetail from "../components/product_detail";
import { Route, Routes } from "react-router-dom"
import "./bai3.css"

function Bai3() {
    let products = [{ id: 1, name: "Iphone", price: "500$" },
    { id: 2, name: "Laptop", price: "600$" },
    { id: 3, name: "Samsung", price: "400$" }
    ];

    return (
        <div className="container">
            {/* <ProductCard id="1" name="Iphone" price="500$"></ProductCard>
            <ProductCard id="2" name="MSI" price="600$"></ProductCard>
            <ProductCard id="3" name="Samsung" price="400$"></ProductCard> */}

            {/* hiển thị product card */}
            {products.map((p) => (
                <ProductCard key={p.id} id={p.id} name={p.name} price={p.price}></ProductCard>
            ))}

            <Routes>
                {/* path này nhận mọi string khác nhau có dạng /product_detail/* */}
                <Route path="/product_detail/:id" element={<ProductDetail
                    products={products}
                ></ProductDetail>}></Route>
            </Routes>
        </div>


    )
}

export default Bai3
import { use, useEffect, useState } from "react";

function Bai2() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    let url = "https://jsonplaceholder.typicode123.com/users";
    // "https://jsonplaceholder.typicode123.com/users"
    useEffect(() => {
        async function fetchData() {
            try {
                const fet = await fetch(url);
                const data = await fet.json();
                setData(data);

            } catch (err) {
                setError("lỗi khi lấy gọi API");
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [])

    if (loading) {
        return <p>Loading...</p>;
    } else if (error) {
        return <p>{error}</p>
    } else {
        return (
            data.map((item) => {
                return (<div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                </div>)
            })
        )
    }
}

export default Bai2
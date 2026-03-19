import { useEffect, useState } from 'react'

function Bai4() {
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [filterData, setFilterData] = useState([]); // lưu lại giá trị filter tránh ghi đè data gây mất dữ liệu gốc
    let url = "https://jsonplaceholder.typicode.com/posts";

    useEffect(() => {
        async function fetchData() {
            const fd = await fetch(url);
            const js = await fd.json();
            setData(js);
            setFilterData(js)
        }

        fetchData();
    }, [])

    function functionFilterData(e) {
        setSearchValue(e.target.value);
    }

    useEffect(() => {
        async function searchFilter() {
            let filter = data.filter((item) => {
                return item.body.includes(searchValue.toLowerCase());
            })

            setFilterData(filter);
        }

        searchFilter();
    }, [searchValue])

    return (
        <>
            <div>
                <input type="text" value={searchValue} placeholder='Nhập dữ liệu vào'
                    onChange={functionFilterData}
                />
            </div>
            {


                filterData.map((item) => {
                    return <div key={item.id}>
                        {item.body}
                    </div>

                })



            }
        </>
    )
}

export default Bai4
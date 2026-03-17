import { useEffect, useState } from "react";

function Bai1() {
    const [user, setUser] = useState([]);
    let url = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(data => setUser(data))

    }, [])

    return (
        <>
            {
                user.map((item) => {
                    return <div>
                        <p>{item.name}</p>
                        <p>{item.email}</p>
                    </div>
                })
            }
        </>
    )
}

export default Bai1
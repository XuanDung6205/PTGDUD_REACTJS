import { useState, useEffect } from "react";

function Bai3() {
    const [user, setUser] = useState(null);
    const [userID, setUserID] = useState("");
    const [error, setError] = useState(false);
    // let url = "https://jsonplaceholder.typicode.com/users/{id}";

    useEffect(() => {
        console.log(userID);

        if (userID === "") return;
        if (userID < 1 || userID > 10) {
            setError(true);
            setUserID(null);
            setUser(null);
            return;
        }

        async function fetchData() {
            try {
                setError(false);
                setUser(null);
                const data = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
                const user = await data.json();
                // console.log(`https://jsonplaceholder.typicode.com/users/${userId}`);
                setUser(user);
            } catch {
                setError(true);
            }

        }

        fetchData();
    }, [userID])

    return (
        <>
            <input type="text" placeholder="Nhập userID" value={userID}
                onChange={(e) => setUserID(e.target.value)}

            />

            {error === true ? (<p>User not found</p>) : null}

            {user !== null ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                </div>
            ) : null}
        </>



    )
}

export default Bai3
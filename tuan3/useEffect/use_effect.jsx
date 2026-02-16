import { useState, useEffect } from "react";

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer); // cleanup
    }, []);

    return <h2>{time.toLocaleTimeString()}</h2>;
}

export default Clock;

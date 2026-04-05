import { useState } from "react";

function Counter1() {
    const [counter, setCounter] = useState(0);

    function setcounter(data) {
        if (data === 1) setCounter(counter + 1);
        else if (data === 2) setCounter(counter - 1);
        else setCounter(0);
    }

    return (
        <>
            <div>
                {counter}
            </div>
            <div>
                <button onClick={() => setcounter(1)}>Tăng</button>
                <button onClick={() => setcounter(2)}>Giảm</button>
                <button onClick={() => setcounter(3)}>Reset</button>
            </div>
        </>
    )
}

export default Counter1
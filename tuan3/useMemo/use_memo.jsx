import { useState, useMemo } from "react";

function ExpensiveComponent() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const expensiveCalculation = (num) => {
        console.log("Đang tính...");
        for (let i = 0; i < 1000000000; i++) { }
        return num * 2;
    };

    const result = useMemo(() => {
        return expensiveCalculation(number);
    }, [number]);

    return (
        <div style={{ background: dark ? "#333" : "#fff" }}>
            <h2>Kết quả: {result}</h2>

            <button onClick={() => setNumber(number + 1)}>
                Tăng số
            </button>

            <button onClick={() => setDark(!dark)}>
                Toggle theme
            </button>
        </div>
    );
}

export default ExpensiveComponent;
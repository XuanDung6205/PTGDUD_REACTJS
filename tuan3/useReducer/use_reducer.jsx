import { useReducer, useState } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return [...state, action.payload];

        case "remove":
            return state.filter((_, i) => i !== action.index);

        default:
            return state;
    }
}

function Todo() {
    const [todos, dispatch] = useReducer(reducer, []);
    const [text, setText] = useState("");

    return (
        <div>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    dispatch({ type: "add", payload: text });
                    setText("");
                }}
            >
                Add
            </button>

            {todos.map((todo, i) => (
                <div key={i}>
                    {todo}
                    <button onClick={() => dispatch({ type: "remove", index: i })}>
                        X
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Todo;

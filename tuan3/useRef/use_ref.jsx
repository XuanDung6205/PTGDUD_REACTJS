import { useRef } from "react";

function FocusInput() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <input ref={inputRef} placeholder="Nhập gì đó..." />
            <button onClick={handleFocus}>
                Focus con trỏ vào input
            </button>
        </>
    );
}

export default FocusInput;

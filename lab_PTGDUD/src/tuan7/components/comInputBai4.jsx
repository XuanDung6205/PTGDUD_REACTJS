import { useState } from "react"
import { useRecoilState } from "recoil"
import { ToDoList } from "../Global_State/recoil"

export default function InputToDo() {
    const [list, setList] = useRecoilState(ToDoList)
    const [item, setItem] = useState("")


    // ...current -> copy lại toàn bộ cái cũ
    function handle() {
        if (item === "") return;

        setList((current) => [
            ...current, { id: Date.now(), text: item }
        ])

        setItem("")
        console.log(list);

    }

    return (
        <div>
            <span>nhập việc cần làm: </span>
            <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
            <button onClick={handle}>thêm</button>
        </div>
    )
}   
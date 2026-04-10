import { useState } from "react"
import { useRecoilState } from "recoil"
import { ToDoList } from "../Global_State/recoil"

export default function ToDoItem({ item }) {
    const [list, setList] = useRecoilState(ToDoList);
    const [updateValue, setUpdate] = useState("");

    function deleteItem() {
        const newList = list.filter((oldItem) => (oldItem.id !== item.id))
        setList(newList)
    }

    function updateItem() {
        if (updateValue === "") return;
        const newList = list.map((item_in_list) => {
            if (item_in_list.id === item.id) {
                //phần tử hiện tại (ko liên quan đến mấy thằng khác) để ghi đè lại text
                // sau đó trả về newList để append vào
                return { ...item_in_list, text: updateValue }
            }
            return item_in_list; // tự append lại vào newList nếu ko trùng id
        })

        setList(newList)
        setUpdate("")
    }

    return (
        <div>
            <div>{item.id}</div>
            <div>{item.text}</div>
            <div>
                <button onClick={deleteItem}>xóa</button>
                <button onClick={updateItem}>sửa</button>
                <input type="text" value={updateValue} onChange={(e) => (setUpdate(e.target.value))} />
            </div>
        </div>
    )
}
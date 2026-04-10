import { useRecoilValue } from "recoil"
import { ToDoList } from "../Global_State/recoil"
import ToDoItem from "../components/comToDoItemBai4"

export default function ToDoListFunction() {
    const list = useRecoilValue(ToDoList)

    return (
        <div>
            <h1>Danh sách việc cần làm</h1>
            <h3>danh sách</h3>
            <div>
                {list.map((item) => (
                    <ToDoItem key={item.id} item={item}></ToDoItem>
                ))}
            </div>
        </div >
    )
}
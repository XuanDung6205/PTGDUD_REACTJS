import { useRecoilValue } from "recoil"
import { theme } from "../Global_State/recoil"

export default function ComBai2_B() {
    const value = useRecoilValue(theme)
    let colorValue = value === "light" ? "white" : "black";
    let backColor = value === "light" ? "black" : "white";

    return (
        <div style={{
            background: backColor,
            color: colorValue
        }}>
            <div>đây là component 2</div>
            <div>sẽ hiển thị màu trắng và chữ màu đen khi click nút đổi màu</div>
            <div>và ngược lại</div>
        </div >
    )
}
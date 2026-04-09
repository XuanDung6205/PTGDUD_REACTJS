import { useRecoilValue } from "recoil"
import { theme } from "../Global_State/recoil"

export default function ComBai2_A() {
    const value = useRecoilValue(theme)
    let colorValue = value === "light" ? "black" : "white";
    let backColor = value === "light" ? "white" : "black";

    return (
        <div style={{
            background: backColor,
            color: colorValue
        }}>
            <div>đây là component 1</div>
            <div>sẽ hiển thị màu đen và chữ màu trắng khi click nút đổi màu</div>
            <div>và ngược lại</div>
        </div >
    )
}
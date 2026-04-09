import { useRecoilState } from "recoil"
import { state_Bai1 } from "../Global_State/recoil"

export default function ComB() {
    const [value, setValue] = useRecoilState(state_Bai1)

    return (
        <div>
            <button onClick={() => setValue(value + 1)}>Tăng</button>
            <button onClick={() => setValue(value - 1)}>Giảm</button>
        </div>
    )
}
import { useRecoilValue } from "recoil"
import { state_Bai1 } from "../Global_State/recoil"

export default function ComA() {
    const value = useRecoilValue(state_Bai1);
    return (
        <div>
            {value}
        </div>
    )
}
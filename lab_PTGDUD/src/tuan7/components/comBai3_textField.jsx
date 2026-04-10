import { useRecoilState } from "recoil"
import { user } from "../Global_State/recoil"

export default function ComBai3_textfield() {
    const [_user, setUser] = useRecoilState(user)

    return (
        <div>
            <input type="text" placeholder="nhập họ tên"
                onChange={(e) => {
                    setUser((current) => ({
                        ...current, username: e.target.value
                    }))
                }} />
            <input type="text" placeholder="nhập role"
                onChange={(e) => {
                    setUser((current) => ({
                        ...current, role: e.target.value
                    }))
                }} />
        </div>
    )
}
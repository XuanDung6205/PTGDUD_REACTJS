import { useRecoilState } from "recoil"
import { user } from "../Global_State/recoil"

export default function ComBai3_button() {
    const [_user, setUser] = useRecoilState(user)

    // current là user hiện tại sẽ được cập nhật giá trị thành user mới
    function handle_login() {
        setUser((current) => ({ username: current.username, role: current.role, isLogin: true }))

    }

    function handle_logout() {
        setUser(() => ({ username: "", role: "", isLogin: false }))
    }

    return (
        <div>
            <button onClick={handle_login}>Login</button>
            <button onClick={handle_logout}>Logout</button>
        </div>
    )
}
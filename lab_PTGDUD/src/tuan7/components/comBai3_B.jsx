import { useRecoilValue } from "recoil"
import { user } from "../Global_State/recoil"

export default function ComBai3_B() {
    const value = useRecoilValue(user)

    return (
        <div>
            <h1>đây là component 2</h1>
            <div>Hello, user {value.username}</div>
            <div>Login: {String(value.isLogin)}</div>
            <div>user role is {value.role}</div>
        </div>
    )
}
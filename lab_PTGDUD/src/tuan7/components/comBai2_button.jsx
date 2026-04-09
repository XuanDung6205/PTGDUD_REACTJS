import { useRecoilState } from "recoil"
import { theme } from "../Global_State/recoil"

export default function ComBai2_button() {
    const [themeValue, setTheme] = useRecoilState(theme)


    function handleTheme() {
        if (themeValue === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <div>
            <button onClick={handleTheme}>Đổi màu</button>
        </div>
    )
}
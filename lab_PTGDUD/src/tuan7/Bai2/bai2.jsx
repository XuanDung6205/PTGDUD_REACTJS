import { useRecoilValue } from "recoil"
import { theme } from "../Global_State/recoil"
import Com1 from "../components/comBai2_A"
import Com2 from "../components/comBai2_B"
import Button from "../components/comBai2_button"
import "../CSS/bai2.css"

export default function Bai2() {
    const value = useRecoilValue(theme)

    let backColor = value === "light" ? "orange" : "purple";

    return (
        <div style={{ background: backColor, minHeight: "100vh" }}>
            <div style={{ paddingTop: "100px" }}></div>
            <Com1></Com1>
            <div>---------</div>
            <Com2></Com2>
            <Button></Button>
        </div>
    )
}
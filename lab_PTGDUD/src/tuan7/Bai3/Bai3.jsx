import { useRecoilValue } from "recoil"
import { user } from "../Global_State/recoil"

import ComA from "../components/comBai3_A"
import ComB from "../components/comBai3_B"
import ComButton from "../components/comBai3_button"
import TF from "../components/comBai3_textField"


export default function Bai3() {
    const value = useRecoilValue(user)


    return (
        <div>
            <TF></TF>
            {value.isLogin && (
                <div>
                    <ComA></ComA>
                    <ComB></ComB>
                </div>
            )}

            <ComButton></ComButton>
        </div>
    )
}
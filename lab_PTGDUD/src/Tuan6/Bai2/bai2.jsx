import { Route, Routes } from 'react-router-dom'
import NotFound from '../components/not-found'
import Home from '../components/home'
import About from '../components/about'
import Contact from '../components/contact'

import { useNavigate } from "react-router-dom";

function Bai2() {
    const navigate = useNavigate();

    const GoFunction = () => {
        const url = document.querySelector("input").value;
        navigate(url)
    }


    return (
        <>
            <div>
                <input type="text" placeholder='nhập url' />
                <button onClick={GoFunction}>Go</button>
            </div>

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>

                {/* để ở cuối nếu ko bị nuốt hết các trang hợp lệ bên trên*/}
                <Route path='*' element={<NotFound />}></Route>

            </Routes>
        </>
    )
}

export default Bai2
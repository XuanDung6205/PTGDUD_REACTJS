import { Route, Routes, Link } from 'react-router-dom'
import Home from '../components/home'
import About from '../components/about'
import Contact from '../components/contact'


function Bai1() {
    return (
        <>
            <nav>
                <Link to='/'>Home</Link> ||
                <Link to='/about'>About</Link> ||
                <Link to='/contact'>Contact</Link>
            </nav>

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
            </Routes>
        </>
    )
}

export default Bai1

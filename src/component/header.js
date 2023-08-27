import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './home';
import AddPerson from './create';
import EditPerson from "./edit";
import Detail from "./single";
const Header = () => {
    return (
        <>
            <BrowserRouter>
                <header className='header'>
                    <div className='container'>
                        <nav className='nav custome'>
                            <Link to="/" className='nav-brand'>
                                    <img src='/image/logo.svg' height={32} /> <h2 className='brand-name'>Pradeep K.</h2>
                            </Link>
                            <Link to="/AddPerson" className='add-btn common-btn'> + Add Person</Link>
                        </nav>
                    </div>
                    
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/AddPerson" element={<AddPerson />} />
                    <Route path="/edit/:id" element={<EditPerson />} />
                    <Route path="/detail/:id" element={<Detail />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default Header